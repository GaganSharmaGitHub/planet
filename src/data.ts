export interface Skill{
	title:string,
	image:string,
	level:0|1|2|3|4|5,
	obj?:any
}
export interface Tool{
	title:string,
	image:string,
}
export interface Project{
	title:string,
	image:string,
    tech:string[],
    link:string,
    description:string,
}
export interface Exp{
    company:string,
    image:string,
    role:string,
    time:string,
    points:string[],
}
export interface Contact{
    platform: string,
    link: string,
    username:string
}
export const allSkills:Skill[]=[
	{image:'assets/logo/js.png',
	title:'Javascript',
	level:5
    },
	{image:'assets/logo/java.png',
	title:'Java',
	level:5},
	
    {
        image:'assets/logo/node.png',
        title:'NodeJs',
        level:5,
    },{
	image:'assets/logo/flutter.png',
	title:'Flutter',
	level:5
	},
	{
		image:'assets/logo/react.png',
		title:'React',
		level:4,
		},
		
	{
		image:'assets/logo/Dart.png',
		title:'Dart',
		level:5,
	},
    {
        image:'assets/logo/mongo.png',
        title:'MongoDB',
        level:5,
    },
    		
	{image:'assets/logo/html.png',
	title:'HTML',
	level:5,
	},
    {
        image:'assets/logo/css.png',
        title:'CSS',
        level:5,
    },
    {
        image:'assets/logo/Python-logo.png',
        title:'Python',
        level:5,
    },
    
               
]
export const myTools:Tool[]=[
    {
        image:'assets/logo/git.png',
        title:'Git', 
    },
    {
        image:'assets/logo/vscode.png',
        title:'Visual Studio Code', 
    },{
        image:'assets/logo/bootstrap.png',
        title:'Bootstrap', 
    },{
        image:'assets/logo/firebase.png',
        title:'Firebase', 
    },{
        image:'assets/logo/ts.png',
        title:'Typescript', 
    },{
        image:'assets/logo/postman.png',
        title:'Postman', 
    },{
        image:'assets/logo/sass.png',
        title:'SCSS', 
    },
]

export const allProjects: Project[]=[
    {
        description:'REST API for a Twitter like social media platform',
        image:'assets/projects/hap.png',
        link:'https://github.com/GaganSharmaGitHub/happening',
        tech:['Javascript','NodeJS','MongoDB','Express','Typescript'],
        title:'Happening'
    },{
        description:'the amazing music app powered with flutter',
        image:'assets/projects/amuzicLogo.png',
        link:'https://github.com/GaganSharmaGitHub/Amuzic',
        tech:['Flutter','Firebase','YouTube API'],
        title:'Amuzic'
    },{
        description:"A smart home web app that allows you to monitor your home's temperature, door, and lets you turn devices on or off from any corner of world",
        image:'assets/projects/smarthomelogo.svg',
        link:'ok.com',
        tech:['Javascript','IoT','HTML','CSS'],
        title:'SmartHome'
    },{
        description:'A bat killing game using HTML5 canvas',
        image:'assets/projects/batslayer.png',
        link:'ok.com',
        tech:['Javascript','HTML','CSS'],
        title:'BatSlayer'
    },{
        description:'Classic tic-tac-toe game in react native',
        image:'assets/projects/Tic_tac_toe.png',
        link:'ok.com',
        tech:['Javascript','React Native',],
        title:'Tic-Tac-Toe'
    },{
        description:'Basic Weather App',
        image:'assets/projects/weather.png',
        link:'ok.com',
        tech:['Javascript','React'],
        title:'Weather Now'
    }
]
export const myExp:Exp[]=[
    {
        company:'India Health Link, Chennai IN',
        role:'Flutter Developer Intern',
        points:["Company focusing on preventive healthcare","Worked with a team in developing mobile application","Responsible for implementing various key features of app",],
        image:'assets/company/ihl.jpg',
        time:'June 2020 - August 2020'
    },{
        company:'Raahee, Delhi IN',
        role:'Lead Software Developer',
        points:["A project funded by Cisco Thingqbator, Nasscom"," Worked as a team lead to develop and deploy applications for","Mental Health Professionals."," Built 2 cross platform applications using Flutter framework."," Designed and implemented a realtime chat server in Node.js.",],
        image:'assets/company/raahee.png',
        time:'November 2020 - Present'
    },{
        company:'AviIndia Pvt. Ltd., Delhi IN',
        role:'Freelance Developer',
        points:["Developed and delivered loan advice app","Built using Flutter and firebase","Integrated Facebook Audience Network ads"],
        image:'assets/company/aviin.png',
        time:'October 2020 - November 2020'
    },
    {
        company:'CrowdSurf, Stanford CA',
        role:'Lead Software Developer',
        points:["A social planning app to drive forward real-life interactions for Generation Z.", "Building a cross-platform app using the Flutter framework.","Designing and implementing web services in firebase."],
        image:'assets/company/Crowdsurf.png',
        time:'June 2020 - August 2020'
    },
]
export const allContacts: Contact[] = [
    {
        link: "mailto:gagan3103sharma2000@gmail.com",
        username:"gagan3103sharma2000@gmail.com",
        platform:"Mail"
    },
    {
        link: "https://www.linkedin.com/in/gagan-sharma3103/",
        username:"/in/gagan-sharma3103/",
        platform:"LinkedIn"
    },{
        link: "https://github.com/GaganSharmaGitHub",
        username:"/GaganSharmaGitHub",
        platform:"GitHub"
    },{
        link: "https://t.me/NevermindGags",
        username:"/NevermindGags",
        platform:"Telegram"
    },

]