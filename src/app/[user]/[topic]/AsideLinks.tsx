'use client';
export const fetchCache = 'default-cache';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
export default function AsideLinks({topic, id, urlTopic}: {topic: string; id: number; urlTopic:string}) {
    const pathname = usePathname();
    const isActive = pathname.endsWith(`/${urlTopic}/${id}`);
    function handleMove(id: string, operation: boolean) {
        const currentPathname = pathname;
        if (operation) {
            const newPathname = `${currentPathname}/${id}`;
            return newPathname;
        } else {
            const pathArray=currentPathname.split('/');
            pathArray.pop();
            pathArray.push(id.toString());
            const newPathname=pathArray.join('/')
            
            return newPathname;
        }
    }
    const newPathname = pathname.endsWith(`${urlTopic}`)
        ?  handleMove(id.toString(), true)
        :handleMove(id.toString(), false);
    return (
        <Link
            href={newPathname}
            className={isActive ? 'active' : ''}>
            {topic}
        </Link>
    );
}
