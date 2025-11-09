import React from 'react'

interface PromotionCardProps {
  title: string;
  content: string;
  isMobile?: boolean;
}

const PromotionCard = ({ title, content, isMobile = false }: PromotionCardProps) => {
  return (
    <div
      className={`${
        isMobile ? "w-[300px] h-[166px]" : "w-[400px] h-[197px]"
      } border-[3px] border-corvidian-2 bg-[#f4f4f4] p-[20px] flex flex-col justify-center`}
      style={{
        borderRadius: "0 20px 20px 20px",
      }}
    >
      {/* Card Title */}
      <h3 className="font-bold text-[16px] leading-[100%] text-corvidian-2 mb-[12px]">
        {title}
      </h3>

      {/* Card Content */}
      <p className="font-medium text-[14px] leading-[120%] text-corvidian-1">
        {content}
      </p>
    </div>
  );
}

export default PromotionCard