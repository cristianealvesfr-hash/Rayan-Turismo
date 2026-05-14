import { useEffect } from 'react';

interface InstagramPostProps {
  url: string;
}

export const InstagramPost = ({ url }: InstagramPostProps) => {
  useEffect(() => {
    // Carrega o script oficial do Instagram se não estiver carregado
    if (!(window as any).instgrm) {
      const s = document.createElement('script');
      s.async = true;
      s.src = '//www.instagram.com/embed.js';
      document.body.appendChild(s);
    } else {
      // Processa novamente os embeds quando o componente montar
      setTimeout(() => {
        (window as any).instgrm.Embeds.process();
      }, 500);
    }
  }, [url]);

  return (
    <div className="w-full flex justify-center bg-white">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: '0',
          margin: '1px',
          maxWidth: '540px',
          minWidth: '326px',
          padding: '0',
          width: 'calc(100% - 2px)',
          borderRadius: '3px',
          boxShadow: 'none'
        }}
      >
      </blockquote>
    </div>
  );
};
