import  fs  from "fs-extra";

export default async function langSelector(lang:string='ts') {
    const sourceFolder = `${process.cwd()}/src/templates/${lang}`;
    const destinationPath = `${process.cwd()}/src/f`;

    try {
        console.log('Deploying files ....');
        await fs.copy(sourceFolder, destinationPath);
        console.log(`New ${lang} project created.`);
    } catch (error) {
        console.error('Error creating new project:', error);
    }
}