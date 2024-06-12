import Navigation from "./Navigation"

export const metadata = {
    title: '',
    description: 'Main page',
  }
  
  export default function RootLayout({
    children,
    params
  }: {
    children: React.ReactNode;
    params:{user:string; topic:string}
  }) {
    return (
        <>
        <header>
            <Navigation user={params.user}/>
        </header>
        {children}
        </>
        
    )
  }
  