import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

/**
 * Helper to convert base64 Data URL to File object for navigator.share API
 */
const dataURLtoFile = (dataurl, filename) => {
  const arr = dataurl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

const KITCHEN_WHATSAPP_NUMBER = "919996461616"; // Official Tatsaaraa Kavan Kitchen WhatsApp Number

const Success = ({ clearSelection }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { imgData, guestName, selectedList, totalPrice } = location.state || {};
  const [shareAlert, setShareAlert] = useState("");

  const handleSendWhatsApp = () => {
    if (!selectedList || selectedList.length === 0) return;

    let message = `🏔️ *Tatsaaraa Kavan Dining Request* 🏔️\n`;
    message += `I would like to request the following home-cooked meal:\n\n`;
    message += `👤 *Guest:* ${guestName || 'Guest'}\n`;
    message += `📅 *Date:* ${new Date().toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}\n`;
    message += `⏰ *Time:* ${new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}\n\n`;
    message += `*Selected Items:*\n`;

    selectedList.forEach(({ item, quantity }) => {
      message += `• ${item.name} × ${quantity} (₹${item.price * quantity})\n`;
    });

    message += `\n━━━━━━━━━━━━━━━━━━\n`;
    message += `💰 *Grand Total:* ₹${totalPrice}\n`;
    message += `━━━━━━━━━━━━━━━━━━\n\n`;
    message += `_(Note: I have downloaded my generated order slip image and will attach it in the chat below.)_\n`;
    message += `Thank you! 🌿`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${KITCHEN_WHATSAPP_NUMBER}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleDownload = () => {
    if (!imgData) return;
    const downloadLink = document.createElement('a');
    downloadLink.href = imgData;
    downloadLink.download = 'Tatsaaraa_Kavan_Order.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleShare = async () => {
    if (!imgData) return;
    try {
      const file = dataURLtoFile(imgData, 'Tatsaaraa_Kavan_Order.png');
      
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'Tatsaaraa Kavan Dining Slip',
          text: `Dining selection slip for ${guestName || 'Guest'}.`
        });
      } else {
        throw new Error("Web Share files API not supported.");
      }
    } catch (err) {
      console.warn("Direct sharing failed, executing fallback download: ", err);
      // Fallback
      handleDownload();
      setShareAlert("Your device does not support direct sharing. The image has been downloaded and can now be shared manually.");
      // Automatically clear after 6 seconds
      setTimeout(() => setShareAlert(""), 6000);
    }
  };

  const handleBackToMenu = () => {
    const confirmReset = window.confirm("Start a new selection?");
    if (confirmReset) {
      clearSelection();
      navigate('/menu');
    }
  };

  // If page is accessed directly without image data (e.g. fresh reload)
  if (!imgData) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-4 animate-fade-in select-none">
        <svg 
          viewBox="0 0 100 80" 
          className="w-20 h-20 stroke-antique fill-none mb-4 opacity-50"
          strokeWidth="0.75"
        >
          <ellipse cx="50" cy="55" rx="35" ry="12" />
          <path d="M50 15 V51" />
        </svg>
        <h3 className="text-base font-heading font-semibold text-primary mb-1">
          No order details found.
        </h3>
        <p className="text-xs text-antique/60 font-body mb-8">
          It looks like there is no active order summary to view.
        </p>
        <Link 
          to="/menu"
          className="px-6 py-2.5 bg-primary text-paper font-heading text-xs uppercase tracking-wider border border-secondary/40 shadow-vintage-sm"
        >
          Go to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="py-2 animate-fade-in flex flex-col items-center pb-24">
      
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold tracking-wide text-primary font-heading mb-1">
          Order Summary Ready
        </h2>
        <p className="text-xs text-secondary/80 font-body italic">
          Your order summary has been successfully generated.
        </p>
      </div>

      {/* Rendered slip preview */}
      <div className="w-full max-w-[280px] p-2 bg-paper border border-antique/20 shadow-vintage-lg mb-6 relative group overflow-hidden">
        <img 
          src={imgData} 
          alt="Tatsaaraa Kavan Dining Slip" 
          className="w-full h-auto object-contain border border-antique/10"
        />
        {/* Subtle hover instruction */}
        <div className="absolute inset-0 bg-primary/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="text-[10px] font-heading bg-paper/90 px-3 py-1.5 border border-antique uppercase tracking-widest text-primary shadow-vintage-sm">
            PNG Slip Preview
          </span>
        </div>
      </div>

      {/* Fallback alerts if share fails */}
      {shareAlert && (
        <div className="w-full max-w-sm px-4 py-2.5 mb-4 border border-antique/30 bg-paper/90 text-primary font-body text-[10px] italic leading-relaxed text-justify rounded-sm animate-fade-in">
          {shareAlert}
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col gap-3 w-full max-w-sm px-2">
        <button
          onClick={handleDownload}
          className="w-full relative inline-flex items-center justify-center px-6 py-3.5 bg-primary hover:bg-accent text-paper font-heading text-xs uppercase tracking-widest border border-secondary/40 transition-colors duration-300 shadow-vintage-md group rounded-sm"
        >
          <span>Download Image</span>
          <span className="absolute inset-0.5 border border-dashed border-secondary/20 group-hover:border-secondary/30 pointer-events-none rounded-sm"></span>
        </button>

        {selectedList && selectedList.length > 0 && (
          <button
            onClick={handleSendWhatsApp}
            className="w-full relative inline-flex items-center justify-center px-6 py-3.5 bg-successColor hover:bg-[#2d4333] text-paper font-heading text-xs uppercase tracking-widest border border-successColor/30 transition-colors duration-300 shadow-vintage-md group rounded-sm"
          >
            <span>Send Order via WhatsApp</span>
            <span className="absolute inset-0.5 border border-dashed border-paper/10 group-hover:border-paper/20 pointer-events-none rounded-sm"></span>
          </button>
        )}

        <button
          onClick={handleShare}
          className="w-full py-3 bg-paper text-primary border border-antique/40 hover:bg-hoverBg/40 hover:border-antique transition-colors text-xs font-heading uppercase tracking-widest rounded-sm"
        >
          Share Image
        </button>

        <div className="w-full h-[1px] bg-antique/10 my-2"></div>

        <button
          onClick={handleBackToMenu}
          className="w-full py-3 bg-paper text-secondary border border-antique/30 hover:bg-hoverBg/25 hover:border-antique/40 transition-colors text-xs font-heading uppercase tracking-widest rounded-sm font-semibold"
        >
          Back to Menu
        </button>
      </div>

    </div>
  );
};

export default Success;
