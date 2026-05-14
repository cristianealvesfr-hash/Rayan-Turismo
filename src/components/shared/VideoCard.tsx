import { Play } from 'lucide-react';

interface VideoCardProps {
  coverUrl?: string;
  videoUrl: string;
  title?: string;
  className?: string;
}

export const VideoCard = ({ videoUrl, className = "" }: VideoCardProps) => {
  // Garantir que a URL termina com a barra antes de adicionar o 'embed'
  const embedUrl = videoUrl.endsWith('/') ? `${videoUrl}embed` : `${videoUrl}/embed`;

  return (
    <div className={`w-full h-full bg-slate-50 flex items-center justify-center overflow-hidden ${className}`}>
      <iframe
        src={embedUrl}
        className="w-full h-full"
        frameBorder="0"
        scrolling="no"
        allowTransparency={true}
        allow="encrypted-media"
        title="Instagram Video"
        style={{ minHeight: '100%', border: 'none', background: 'white' }}
      ></iframe>
    </div>
  );
};
