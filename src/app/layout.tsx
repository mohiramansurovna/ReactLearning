import {EdgeStoreProvider} from '@/lib/edgestore';
import '@/styles/global.css';
import '@/styles/main.css';
export const metadata = {
    title: {
        template: 'Learning | %s',
        default: 'Learn',
    },
    description: 'Help to all to create web',
};
export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang='en'>
            <head>
                <link
                    rel='icon'
                    type='image/png'
                    href='/eye-closeup.png'></link>
                <script
                    src='https://kit.fontawesome.com/b316722629.js'
                    crossOrigin='anonymous'></script>
            </head>
            <body>
                <EdgeStoreProvider>{children}</EdgeStoreProvider>
            </body>
        </html>
    );
}
