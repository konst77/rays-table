declare namespace NodeJS {
  interface ProcessEnv {
    SUPABASE_URL: string;
    SUPABASE_ANON_KEY: string;
    RESEND_API_KEY: string;
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    'animated-icons': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      trigger?: string;
      attributes?: string;
      height?: string | number;
      width?: string | number;
    };
  }
}
