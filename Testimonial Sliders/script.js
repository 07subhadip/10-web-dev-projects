const testimonials = [
    {
        name: "Jane Doe",
        photo: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: `"This project exceeded my expectations in every way. The team's attention to detail and dedication to excellence were evident in every aspect. I highly recommend their services!"`
    },
    {
        name: "John Smith",
        photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: `"Working with this team was a game-changer for our company. Their innovative approach and professional execution helped us achieve our goals faster than we thought possible."`
    },
    {
        name: "Emily Johnson",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: `"I've worked with many teams over the years, but this one stands out for their creativity and commitment to quality. They took my ideas and turned them into something truly special."`
    },
    {
        name: "Michael Brown",
        photo: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: `"From start to finish, this project was a breeze thanks to the team's expertise and clear communication. The final product was exactly what we needed and more."`
    },
    {
        name: "Sarah Davis",
        photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: `"I was impressed by the team's ability to understand our needs and deliver a tailored solution. Their professionalism and skill set them apart from the rest."`
    },
    {
        name: "David Wilson",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: `"This project helped us take our business to the next level. The team's insights and execution were invaluable, and we couldn't be happier with the results."`
    },
    {
        name: "Linda Martinez",
        photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: `"Their dedication to delivering high-quality work on time and within budget was remarkable. I would not hesitate to work with them again on future projects."`
    },
    {
        name: "James Garcia",
        photo: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: `"The team's technical expertise and problem-solving skills were key to the success of our project. They were a pleasure to work with and delivered outstanding results."`
    },
    {
        name: "Patricia Taylor",
        photo: "https://images.unsplash.com/photo-1502378735452-bc7d86632805?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: `"The creativity and professionalism displayed throughout this project were second to none. The team went above and beyond to ensure our satisfaction."`
    },
    {
        name: "Robert Lee",
        photo: "https://images.unsplash.com/photo-1502462041640-3e2facb01cd2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: `"The team's passion and commitment were evident from day one. They took our vision and turned it into reality, exceeding all our expectations. Highly recommended!"`
    }
];

const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const userName = document.querySelector(".user-name")

let index = 0

updateTestimonial()

function updateTestimonial(){
    const {name,photo,text} = testimonials[index]

    imgEl.src = photo

    // const randomParam = new Date().getTime();
    // imgEl.src = `${photo}?${randomParam}`;
    textEl.innerText = text
    userName.innerText = name

    index++

    if(index === testimonials.length){
        index = 0
    }
    setTimeout(() => {
        updateTestimonial()
    }, 8000);
}
