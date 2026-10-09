import React, { useState } from "react";
import { Sparkles } from "lucide-react";

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  fallbackLabel?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = "w-full h-full object-cover",
  containerClassName = "relative overflow-hidden bg-[#161412]",
  priority = false,
  fallbackLabel = "Shookra Aesthetics & Academy",
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={containerClassName}>
      {!isLoaded && !hasError && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[#1C1916] via-[#141210] to-[#0D0C0B] animate-pulse"
        />
      )}

      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`${className} transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="w-full h-full min-h-[240px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#1D1916] via-[#13110F] to-[#0D0C0B] border border-[#C6A368]/20"
        >
          <Sparkles className="w-6 h-6 text-[#C6A368] mb-3 opacity-80" />
          <span className="font-serif-editorial text-lg text-[#F6F3EE] tracking-wide">
            {fallbackLabel}
          </span>
          <span className="text-xs text-[#A8A196] mt-1 max-w-xs">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
};
