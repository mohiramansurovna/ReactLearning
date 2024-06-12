
import Aside from "./Aside"
import Navigation from "../Navigation";
export const metadata = {
    title:'React',
    description: 'Learn page',
  }
  export default function RootLayout({
    children, params
  }: {
    children: React.ReactNode;
    params:{topic:string; user:string}
  }) {
    return (
        <>
         <header>
                <Navigation
                    user={params.user}
                    topic={params.topic}
                />
            </header>
          <aside>
            <Aside topic={params.topic}/>
          </aside>
          <main>{children}</main>
          
        </>
    )
  }
  