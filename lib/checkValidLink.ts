export default async function checkValidLink(url: string):Promise<boolean> {
    try{
        const newURL = new URL(url)
        const response = await fetch(newURL, {mode: "no-cors"});
        console.log(response)
        return true;
    }catch{
        console.log("Got caught")
        return false;
    }
}
