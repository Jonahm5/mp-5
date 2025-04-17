import {redirect} from 'next/navigation';
import getOneLink from '@/lib/getOneLink';
export const dynamic = 'force-dynamic';

export default async function GoToLink(props: {params:{alias: string}}){
    const alias = props.params.alias;
    const OGLink = await getOneLink(alias);

    if (!OGLink) {
        redirect('/');
    }

    redirect(OGLink.link)
}