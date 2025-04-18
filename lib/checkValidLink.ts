export default async function checkValidLink(url: string):Promise<boolean> {
    try{
        const newURL = new URL(url)
        await fetch(newURL, {mode: "no-cors"});
        return true;
    }catch{
        return false;
    }
}
