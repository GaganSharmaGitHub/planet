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

export const allProjects: Project[]=[
    {
        description:'manage lorenm ispnjnfebuebfbchebhfhmehbdebiufbuebfekjbj',
        image:'assets/logo/node.png',
        link:'ok.com',
        tech:['Flutter','Firebase','YTAPI'],
        title:'Amuzic'
    },{
        description:'manage lorenm ispnjnfebuebfbchebhfhmehbdebiufbuebfekjbj',
        image:'assets/logo/node.png',
        link:'ok.com',
        tech:['Flutter','Firebase','YTAPI'],
        title:'Amuzic'
    },{
        description:'manage lorenm ispnjnfebuebfbchebhfhmehbdebiufbuebfekjbj',
        image:'assets/logo/node.png',
        link:'ok.com',
        tech:['Flutter','Firebase','YTAPI'],
        title:'Amuzic'
    },{
        description:'manage lorenm ispnjnfebuebfbchebhfhmehbdebiufbuebfekjbj',
        image:'assets/logo/node.png',
        link:'ok.com',
        tech:['Flutter','Firebase','YTAPI'],
        title:'Amuzic'
    },{
        description:'manage lorenm ispnjnfebuebfbchebhfhmehbdebiufbuebfekjbj',
        image:'assets/logo/node.png',
        link:'ok.com',
        tech:['Flutter','Firebase','YTAPI'],
        title:'Amuzic'
    },{
        description:'manage lorenm ispnjnfebuebfbchebhfhmehbdebiufbuebfekjbj',
        image:'assets/logo/node.png',
        link:'ok.com',
        tech:['Flutter','Firebase','YTAPI'],
        title:'Amuzic'
    },{
        description:'manage lorenm ispnjnfebuebfbchebhfhmehbdebiufbuebfekjbj',
        image:'assets/logo/node.png',
        link:'ok.com',
        tech:['Flutter','Firebase','YTAPI'],
        title:'Amuzic'
    },{
        description:'manage lorenm ispnjnfebuebfbchebhfhmehbdebiufbuebfekjbj',
        image:'assets/logo/node.png',
        link:'ok.com',
        tech:['Flutter','Firebase','YTAPI'],
        title:'Amuzic'
    },{
        description:'manage lorenm ispnjnfebuebfbchebhfhmehbdebiufbuebfekjbj',
        image:'assets/logo/node.png',
        link:'ok.com',
        tech:['Flutter','Firebase','YTAPI'],
        title:'Amuzic'
    },{
        description:'manage lorenm ispnjnfebuebfbchebhfhmehbdebiufbuebfekjbj',
        image:'assets/logo/node.png',
        link:'ok.com',
        tech:['Flutter','Firebase','YTAPI'],
        title:'Amuzic'
    },
]
export const allSkills:Skill[]=[
	{image:'assets/logo/Python-logo.png',
	title:'Javascript',
	level:5
    },
	{image:'assets/logo/Python-logo.png',
	title:'Java',
	level:5},
	{
	image:'assets/logo/Python-logo.png',
	title:'Flutter',
	level:5
	},
	{
		image:'assets/logo/Python-logo.png',
		title:'React',
		level:5,
		},
		
	{
		image:'assets/logo/Python-logo.png',
		title:'PYTHON',
		level:3,
	},
		
	{image:'assets/logo/Python-logo.png',
	title:'HTML',
	level:5,
	},
	{
	image:'assets/logo/Python-logo.png',
	title:'Dart',
	level:5,
	},
	
	{
	image:'assets/my.jpg',
	title:'CSS',
	level:5,
	},
]
export const myTools:Tool[]=allSkills

export const myExp:Exp[]=[
    {
        company:'India Health Link',
        role:'Flutter Developer Intern',
        points:['Comapny whichdoes some pretty rad stuff','Comapny whichdoes some pretty rad stuff','Comapny whichdoes some pretty rad stuff','Comapny whichdoes some pretty rad stuff',],
        image:'assets/logo/node.png',
        time:'June 2020 - August 2020'
    },{
        company:'India Health Link',
        role:'Flutter Developer Intern',
        points:['Comapny whichdoes some pretty rad stuff','Comapny whichdoes some pretty rad stuff','Comapny whichdoes some pretty rad stuff','Comapny whichdoes some pretty rad stuff',],
        image:'assets/logo/node.png',
        time:'June 2020 - August 2020'
    },{
        company:'India Health Link',
        role:'Flutter Developer Intern',
        points:['Comapny whichdoes some pretty rad stuff','Comapny whichdoes some pretty rad stuff','Comapny whichdoes some pretty rad stuff','Comapny whichdoes some pretty rad stuff',],
        image:'assets/logo/node.png',
        time:'June 2020 - August 2020'
    },
]
