(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4721:(e,s,a)=>{Promise.resolve().then(a.bind(a,5487)),Promise.resolve().then(a.bind(a,9214)),Promise.resolve().then(a.bind(a,7497)),Promise.resolve().then(a.t.bind(a,8173,23))},5487:(e,s,a)=>{"use strict";a.d(s,{default:()=>b});var r=a(5155),l=a(2115),t=a(4085),i=a(9602);let n=l.forwardRef((e,s)=>{let{className:a,type:l,...t}=e;return(0,r.jsx)("input",{type:l,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:s,...t})});n.displayName="Input";let c=l.forwardRef((e,s)=>{let{className:a,...l}=e;return(0,r.jsx)("textarea",{className:(0,i.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:s,...l})});c.displayName="Textarea";var d=a(5007),o=a(6462),m=a(4999),x=a(1626),h=a(7223),u=a(8283),g=a(8173),p=a.n(g),f=a(6367);let b=()=>{let[e,s]=(0,l.useState)({name:"",email:"",subject:"",message:""}),[a,i]=(0,l.useState)(!1),[g,b]=(0,l.useState)(!1),[j,v]=(0,l.useState)(""),N=e=>{let{name:a,value:r}=e.target;s(e=>({...e,[a]:r}))},y=async a=>{a.preventDefault(),i(!0),v("");try{await f.Ay.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",{to_email:"hashirali.ali21@qmail.cuny.edu",from_name:e.name,from_email:e.email,subject:e.subject,message:e.message},"YOUR_PUBLIC_KEY"),b(!0),s({name:"",email:"",subject:"",message:""}),setTimeout(()=>b(!1),5e3)}catch(e){v("Failed to send message. Please try again or contact me directly via email."),console.error("Email send error:",e)}finally{i(!1)}};return(0,r.jsx)("section",{id:"contact",className:"py-20 bg-muted/30",children:(0,r.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,r.jsxs)("div",{className:"text-center mb-16",children:[(0,r.jsx)("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:"Get In Touch"}),(0,r.jsx)("div",{className:"w-20 h-1 bg-primary mx-auto mb-6"}),(0,r.jsx)("p",{className:"text-lg text-muted-foreground max-w-3xl mx-auto",children:"Have a question or want to work together? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."})]}),(0,r.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-2xl font-semibold mb-6",children:"Contact Information"}),(0,r.jsxs)("div",{className:"space-y-6",children:[(0,r.jsx)(d.Zp,{children:(0,r.jsxs)(d.Wu,{className:"p-6 flex items-center gap-4",children:[(0,r.jsx)("div",{className:"bg-primary/10 p-3 rounded-lg",children:(0,r.jsx)(o.A,{className:"h-6 w-6 text-primary"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{className:"text-lg font-medium mb-1",children:"Email"}),(0,r.jsx)(p(),{href:"mailto:hashirali.ali21@qmail.cuny.edu",className:"text-muted-foreground hover:text-primary transition-colors",children:"hashirali.ali21@qmail.cuny.edu"})]})]})}),(0,r.jsx)(d.Zp,{children:(0,r.jsxs)(d.Wu,{className:"p-6 flex items-center gap-4",children:[(0,r.jsx)("div",{className:"bg-primary/10 p-3 rounded-lg",children:(0,r.jsx)(m.A,{className:"h-6 w-6 text-primary"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{className:"text-lg font-medium mb-1",children:"LinkedIn"}),(0,r.jsx)(p(),{href:"https://www.linkedin.com/in/hashir-ali-b08736276/",target:"_blank",className:"text-muted-foreground hover:text-primary transition-colors",children:"www.linkedin.com/in/hashir-ali-b08736276"})]})]})}),(0,r.jsx)(d.Zp,{children:(0,r.jsxs)(d.Wu,{className:"p-6 flex items-center gap-4",children:[(0,r.jsx)("div",{className:"bg-primary/10 p-3 rounded-lg",children:(0,r.jsx)(x.A,{className:"h-6 w-6 text-primary"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{className:"text-lg font-medium mb-1",children:"GitHub"}),(0,r.jsx)(p(),{href:"https://github.com/HashirAligb",target:"_blank",className:"text-muted-foreground hover:text-primary transition-colors",children:"github.com/HashirAligb"})]})]})}),(0,r.jsx)(d.Zp,{children:(0,r.jsxs)(d.Wu,{className:"p-6 flex items-center gap-4",children:[(0,r.jsx)("div",{className:"bg-primary/10 p-3 rounded-lg",children:(0,r.jsx)(h.A,{className:"h-6 w-6 text-primary"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{className:"text-lg font-medium mb-1",children:"Location"}),(0,r.jsx)("p",{className:"text-muted-foreground",children:"Queens, New York"})]})]})})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-2xl font-semibold mb-6",children:"Send Me a Message"}),(0,r.jsx)(d.Zp,{children:(0,r.jsx)(d.Wu,{className:"p-6",children:(0,r.jsxs)("form",{onSubmit:y,className:"space-y-6",children:[(0,r.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("label",{htmlFor:"name",className:"text-sm font-medium",children:"Name"}),(0,r.jsx)(n,{id:"name",name:"name",value:e.name,onChange:N,placeholder:"Your name",required:!0})]}),(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("label",{htmlFor:"email",className:"text-sm font-medium",children:"Email"}),(0,r.jsx)(n,{id:"email",name:"email",type:"email",value:e.email,onChange:N,placeholder:"Your email",required:!0})]})]}),(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("label",{htmlFor:"subject",className:"text-sm font-medium",children:"Subject"}),(0,r.jsx)(n,{id:"subject",name:"subject",value:e.subject,onChange:N,placeholder:"Subject",required:!0})]}),(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("label",{htmlFor:"message",className:"text-sm font-medium",children:"Message"}),(0,r.jsx)(c,{id:"message",name:"message",value:e.message,onChange:N,placeholder:"Your message",rows:5,required:!0})]}),(0,r.jsx)(t.$,{type:"submit",className:"w-full",disabled:a,children:a?(0,r.jsxs)("span",{className:"flex items-center",children:[(0,r.jsxs)("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,r.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,r.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Sending..."]}):(0,r.jsxs)("span",{className:"flex items-center",children:[(0,r.jsx)(u.A,{className:"mr-2 h-4 w-4"}),"Send Message"]})}),g&&(0,r.jsx)("div",{className:"p-3 bg-green-100 text-green-700 rounded-md text-center",children:"Your message has been sent successfully!"}),j&&(0,r.jsx)("div",{className:"p-3 bg-red-100 text-red-700 rounded-md text-center",children:j})]})})})]})]})]})})}},9214:(e,s,a)=>{"use strict";a.d(s,{default:()=>b});var r=a(5155),l=a(2115),t=a(4085),i=a(1626),n=a(4999),c=a(6462),d=a(6261),o=a(8173),m=a.n(o),x=a(767),h=a(6710),u=a(7725),g=a(2104);function p(){let[e,s]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=localStorage.getItem("theme"),a=window.matchMedia("(prefers-color-scheme: dark)").matches;"dark"===e||!e&&a?(s(!0),document.documentElement.classList.add("dark")):(s(!1),document.documentElement.classList.remove("dark"))},[]),(0,r.jsx)(t.$,{variant:"ghost",size:"icon",onClick:()=>{e?(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"),s(!1)):(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark"),s(!0))},"aria-label":"Toggle theme",children:e?(0,r.jsx)(u.A,{className:"h-5 w-5"}):(0,r.jsx)(g.A,{className:"h-5 w-5"})})}let f=()=>{let[e,s]=(0,l.useState)(!1),[a,i]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let e=()=>{i(window.scrollY>10)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let n=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Projects",href:"#projects"},{name:"Experience",href:"#experience"},{name:"Skills",href:"#skills"},{name:"Contact",href:"#contact"}];return(0,r.jsxs)("nav",{className:"fixed w-full z-50 transition-all duration-300 ".concat(a?"bg-background/80 backdrop-blur-md shadow-sm":"bg-transparent"),children:[(0,r.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,r.jsx)("div",{className:"flex-shrink-0 font-bold text-xl",children:(0,r.jsx)(m(),{href:"#home",className:"text-primary",children:"Hashir Ali"})}),(0,r.jsx)("div",{className:"hidden md:block",children:(0,r.jsxs)("div",{className:"ml-10 flex items-center space-x-4",children:[n.map(e=>(0,r.jsx)(m(),{href:e.href,className:"text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors",children:e.name},e.name)),(0,r.jsx)(p,{})]})}),(0,r.jsxs)("div",{className:"flex md:hidden items-center gap-2",children:[(0,r.jsx)(p,{}),(0,r.jsx)(t.$,{variant:"ghost",size:"icon",onClick:()=>s(!e),className:"inline-flex items-center justify-center",children:e?(0,r.jsx)(x.A,{className:"h-6 w-6"}):(0,r.jsx)(h.A,{className:"h-6 w-6"})})]})]})}),e&&(0,r.jsx)("div",{className:"md:hidden bg-background/95 backdrop-blur-md shadow-lg",children:(0,r.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:n.map(e=>(0,r.jsx)(m(),{href:e.href,className:"text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium",onClick:()=>s(!1),children:e.name},e.name))})})]})},b=()=>{let[e,s]=(0,l.useState)(""),a="Coding Instructor";return(0,l.useEffect)(()=>{let e=0,r=setInterval(()=>{e<a.length?(s(a.substring(0,e+1)),e++):clearInterval(r)},100);return()=>clearInterval(r)},[]),(0,r.jsxs)("section",{id:"home",className:"relative min-h-screen flex flex-col",children:[(0,r.jsx)(f,{}),(0,r.jsx)("div",{className:"flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16",children:(0,r.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",children:[(0,r.jsxs)("div",{className:"space-y-6",children:[(0,r.jsx)("h2",{className:"text-xl md:text-2xl font-medium text-primary",children:"Hello, I'm"}),(0,r.jsx)("h1",{className:"text-4xl md:text-6xl font-bold",children:"Hashir Ali"}),(0,r.jsx)("div",{className:"h-8",children:(0,r.jsxs)("p",{className:"text-xl md:text-2xl text-muted-foreground",children:[e,(0,r.jsx)("span",{className:"animate-blink",children:"|"})]})}),(0,r.jsx)("p",{className:"text-lg text-muted-foreground max-w-lg",children:"A passionate Computer Science student at CUNY Queens College with a focus on building innovative solutions and teaching the next generation of developers. I enjoy exploring new technologies and finding creative ways to solve problems."}),(0,r.jsxs)("div",{className:"flex flex-wrap gap-4",children:[(0,r.jsx)(t.$,{asChild:!0,children:(0,r.jsx)(m(),{href:"#contact",children:"Get In Touch"})}),(0,r.jsx)(t.$,{variant:"secondary",asChild:!0,children:(0,r.jsx)(m(),{href:"#projects",children:"View Projects"})})]}),(0,r.jsxs)("div",{className:"flex gap-4 pt-4",children:[(0,r.jsx)(t.$,{variant:"ghost",size:"icon",asChild:!0,children:(0,r.jsx)(m(),{href:"https://github.com/HashirAligb",target:"_blank","aria-label":"GitHub",children:(0,r.jsx)(i.A,{className:"h-5 w-5"})})}),(0,r.jsx)(t.$,{variant:"ghost",size:"icon",asChild:!0,children:(0,r.jsx)(m(),{href:"https://www.linkedin.com/in/hashir-ali-b08736276/",target:"_blank","aria-label":"LinkedIn",children:(0,r.jsx)(n.A,{className:"h-5 w-5"})})}),(0,r.jsx)(t.$,{variant:"ghost",size:"icon",asChild:!0,children:(0,r.jsx)(m(),{href:"mailto:hashirali.ali21@qmail.cuny.edu","aria-label":"Email",children:(0,r.jsx)(c.A,{className:"h-5 w-5"})})})]})]}),(0,r.jsx)("div",{className:"hidden lg:flex justify-center items-center",children:(0,r.jsx)("div",{className:"relative w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center",children:(0,r.jsx)("div",{className:"absolute w-72 h-72 rounded-full bg-background flex items-center justify-center",children:(0,r.jsx)("div",{className:"w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20",children:(0,r.jsx)("img",{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9774.jpg-k6pCHxUhNgYrTAnAlBluWlNzWFI2Dk.jpeg",alt:"Hashir Ali",className:"w-full h-full object-cover"})})})})})]})}),(0,r.jsx)("div",{className:"absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce",children:(0,r.jsx)(t.$,{variant:"ghost",size:"icon",asChild:!0,children:(0,r.jsx)(m(),{href:"#about","aria-label":"Scroll down",children:(0,r.jsx)(d.A,{className:"h-6 w-6"})})})})]})}},7497:(e,s,a)=>{"use strict";a.d(s,{default:()=>o});var r=a(5155),l=a(5007),t=a(6745),i=a(7902),n=a(1190),c=a(3467),d=a(4641);let o=()=>(0,r.jsx)("section",{className:"py-20 bg-city-night text-white",children:(0,r.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,r.jsxs)("div",{className:"text-center mb-16",children:[(0,r.jsx)("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:"Beyond Coding"}),(0,r.jsx)("div",{className:"w-20 h-1 bg-primary mx-auto mb-6"}),(0,r.jsx)("p",{className:"text-lg text-gray-300 max-w-3xl mx-auto",children:"When I'm not immersed in code, here's what you might find me doing."})]}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[(0,r.jsx)(l.Zp,{className:"bg-black/50 backdrop-blur-sm border-gray-800",children:(0,r.jsxs)(l.Wu,{className:"p-6 flex flex-col items-center text-center",children:[(0,r.jsx)("div",{className:"bg-primary/20 p-4 rounded-full mb-4",children:(0,r.jsx)(t.A,{className:"h-8 w-8 text-primary"})}),(0,r.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Basketball"}),(0,r.jsx)("p",{className:"text-gray-300",children:"Playing basketball helps me stay active and teaches valuable lessons about teamwork and strategy that I apply to my coding projects."})]})}),(0,r.jsx)(l.Zp,{className:"bg-black/50 backdrop-blur-sm border-gray-800",children:(0,r.jsxs)(l.Wu,{className:"p-6 flex flex-col items-center text-center",children:[(0,r.jsx)("div",{className:"bg-primary/20 p-4 rounded-full mb-4",children:(0,r.jsx)(i.A,{className:"h-8 w-8 text-primary"})}),(0,r.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Scenic Views"}),(0,r.jsx)("p",{className:"text-gray-300",children:"Exploring rooftops and scenic spots around the city. I find that taking in beautiful views helps clear my mind and sparks creativity."})]})}),(0,r.jsx)(l.Zp,{className:"bg-black/50 backdrop-blur-sm border-gray-800",children:(0,r.jsxs)(l.Wu,{className:"p-6 flex flex-col items-center text-center",children:[(0,r.jsx)("div",{className:"bg-primary/20 p-4 rounded-full mb-4",children:(0,r.jsx)(n.A,{className:"h-8 w-8 text-primary"})}),(0,r.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Urban Photography"}),(0,r.jsx)("p",{className:"text-gray-300",children:"Capturing the essence of city life through my lens. I'm particularly drawn to night photography and the interplay of light and shadow in urban environments."})]})}),(0,r.jsx)(l.Zp,{className:"bg-black/50 backdrop-blur-sm border-gray-800",children:(0,r.jsxs)(l.Wu,{className:"p-6 flex flex-col items-center text-center",children:[(0,r.jsx)("div",{className:"bg-primary/20 p-4 rounded-full mb-4",children:(0,r.jsx)(c.A,{className:"h-8 w-8 text-primary"})}),(0,r.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Tech Literature"}),(0,r.jsx)("p",{className:"text-gray-300",children:"Reading about emerging technologies, AI ethics, and the future of computing. I believe staying informed is crucial for responsible innovation."})]})}),(0,r.jsx)(l.Zp,{className:"bg-black/50 backdrop-blur-sm border-gray-800",children:(0,r.jsxs)(l.Wu,{className:"p-6 flex flex-col items-center text-center",children:[(0,r.jsx)("div",{className:"bg-primary/20 p-4 rounded-full mb-4",children:(0,r.jsx)(d.A,{className:"h-8 w-8 text-primary"})}),(0,r.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Caf\xe9 Exploration"}),(0,r.jsx)("p",{className:"text-gray-300",children:"Discovering new coffee shops around Queens and Manhattan. I find that a change of environment helps me think more creatively about coding challenges."})]})}),(0,r.jsx)("div",{className:"lg:col-span-1 md:col-span-2 col-span-1",children:(0,r.jsx)("div",{className:"h-full rounded-lg overflow-hidden",children:(0,r.jsx)("img",{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9774.jpg-k6pCHxUhNgYrTAnAlBluWlNzWFI2Dk.jpeg",alt:"Hashir in NYC",className:"w-full h-full object-cover"})})})]})]})})},4085:(e,s,a)=>{"use strict";a.d(s,{$:()=>d});var r=a(5155),l=a(2115),t=a(1290),i=a(1027),n=a(9602);let c=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=l.forwardRef((e,s)=>{let{className:a,variant:l,size:i,asChild:d=!1,...o}=e,m=d?t.DX:"button";return(0,r.jsx)(m,{className:(0,n.cn)(c({variant:l,size:i,className:a})),ref:s,...o})});d.displayName="Button"},5007:(e,s,a)=>{"use strict";a.d(s,{Wu:()=>n,Zp:()=>i});var r=a(5155),l=a(2115),t=a(9602);let i=l.forwardRef((e,s)=>{let{className:a,...l}=e;return(0,r.jsx)("div",{ref:s,className:(0,t.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",a),...l})});i.displayName="Card",l.forwardRef((e,s)=>{let{className:a,...l}=e;return(0,r.jsx)("div",{ref:s,className:(0,t.cn)("flex flex-col space-y-1.5 p-6",a),...l})}).displayName="CardHeader",l.forwardRef((e,s)=>{let{className:a,...l}=e;return(0,r.jsx)("div",{ref:s,className:(0,t.cn)("text-2xl font-semibold leading-none tracking-tight",a),...l})}).displayName="CardTitle",l.forwardRef((e,s)=>{let{className:a,...l}=e;return(0,r.jsx)("div",{ref:s,className:(0,t.cn)("text-sm text-muted-foreground",a),...l})}).displayName="CardDescription";let n=l.forwardRef((e,s)=>{let{className:a,...l}=e;return(0,r.jsx)("div",{ref:s,className:(0,t.cn)("p-6 pt-0",a),...l})});n.displayName="CardContent",l.forwardRef((e,s)=>{let{className:a,...l}=e;return(0,r.jsx)("div",{ref:s,className:(0,t.cn)("flex items-center p-6 pt-0",a),...l})}).displayName="CardFooter"},9602:(e,s,a)=>{"use strict";a.d(s,{cn:()=>t});var r=a(3463),l=a(9795);function t(){for(var e=arguments.length,s=Array(e),a=0;a<e;a++)s[a]=arguments[a];return(0,l.QP)((0,r.$)(s))}}},e=>{var s=s=>e(e.s=s);e.O(0,[341,441,517,358],()=>s(4721)),_N_E=e.O()}]);