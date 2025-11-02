import { gsap } from 'gsap'
import { ScrollSmoother, ScrollTrigger, ScrollToPlugin } from 'gsap/all';

// Array of videos to play in sequence
        const videos = [ "https://www.youtube.com/shorts/IOCeikyqvH4", "https://www.youtube.com/shorts/ZGMSpTaqnkQ"];
        // const videoElement = document.getElementById("bg-video");
        // let current = 0;
    
        // videoElement.addEventListener("ended", () => {
        //     current = (current + 1) % videos.length;
        //     videoElement.src = videos[current];
        //     videoElement.play();
        // });



        const button = document.getElementById("book-btn");
        const booking = document.getElementById('booking');

        const bookingOffset = booking.offsetTop;
        // Get the original button offset from the top

        const scrollsDownBtn = document.getElementById("scrolls-down");
        
        gsap.registerPlugin(ScrollTrigger,ScrollSmoother,ScrollToPlugin)
        // const smoother = ScrollSmoother.create({
        //                         wrapper: '#wrapper',
        //                         content: "#content",
        //                         smooth: 3,
        //                         smoothTouch: 0.1
        //                     });
            
            // buttonHeight = button.offsetHeight;
            
            gsap.to('#book-btn', {
                scrollTrigger: {
                    trigger: '#book-btn',
                    start: 'top 5px',
                    end: `${bookingOffset}px`,
                    pin: true,
                    scrub: true
                },
                zIndex: 1000,
                ease: 'none'
            })
            scrollsDownBtn.addEventListener('click', ()=>{
                gsap.to(window, {
                    scrollTo: '#about',
                    duration: 1.03,
                    ease: 'power4'
                })
            })
            button.addEventListener('click', () => {
                gsap.to(window, {
                    scrollTo: '#booking',
                    duration: 1.03,
                    ease: 'power4'
                })
            });
            
            //=========================================================
            //              service section
            //=========================================================
            // gsap.set(
            //     '.card', {position: 'absolute'}
            // )
            // const cards = document.querySelectorAll('.card')
            // cards.forEach((card, i) => {
            //     gsap.set(card, {
            //         zIndex: 1 * (i + 1)
            //     })
            //     gsap.to(
            //         card,
            //         {
            //             stagger: 0.0,
            //             yPercent: -118 * (i+1),
            //             scrollTrigger: {
            //                 trigger: card,
            //                 start: 'top 280px',
            //                 end: `+=${50 * (i+1)}px`,
            //                 scrub: true,
            //                 markers: true,
            //             }
            //         }
            //     )
            // })

            // gsap.to(
            //     '.service-section',
            //     {
            //         scrollTrigger: {
            //             trigger: '.service-section',
            //             start: 'top top',
            //             end: 'max',
            //             pin: true
            //         }
            //     }
            // )

            const firstCard = document.querySelector("#first-service");
            const cards = gsap.utils.toArray(".card");

            // cards.forEach(card => {
            //     gsap.to(card, {
            //         y: () => {
            //             // distance between each card and the first card
            //             const distance = card.offsetTop - firstCard.offsetTop;
            //             return -distance;
            //         },
            //         ease: "none",
            //         scrollTrigger: {
            //             trigger: ".service-section",
            //             start: "200px 200px",
            //             end: "bottom top",
            //             scrub: true,
            //             markers: true,
            //         },
            //     });
            // });

            // card height + gap between cards
            const gap = -20; // adjust based on your Tailwind gap (in px)
            const cardHeight = firstCard.offsetHeight + gap;

            gsap.set('.card', { position: 'absolute' });
            gsap.to('.card', {
                yPercent: -140,
                stagger: 0.5,
                scrollTrigger: {
                    trigger: '.card',
                    start: "top 900px",
                    end: `+=700px`,
                    scrub: true,
                    markes: true,
                }
            })

            // cards.forEach((card, i) => {

            //     gsap.to(card, {
            //         y: () => -distanceToMove,
            //         ease: "none",
            //         scrollTrigger: {
            //             trigger: card,
            //             start: "200px 560px",
            //             end: `+=${cardHeight * (cards.length - 1)}`,
            //             scrub: true,
            //             markes: true,
            //             // scroller: smoother.wrapper
            //         },
            //     });
            // });

            // =========================================
            //              image section
            // =========================================
            // const smoother = ScrollSmoother.create({
            //     content: '.image-content',
            //     smooth: 3,
            //     smoothTouch: 0.5,
            //     effects: true,
            // });
            // smoother.effects('img', { speed: 'auto' })

                const imageCases = document.querySelectorAll('.image-case img');
                
                window.addEventListener('scroll', () => {
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                    imageCases.forEach(img => {
                        const speed = 0.15; // Adjust this value for more or less movement
                        const offset = img.parentElement.getBoundingClientRect().top + window.scrollY;
                        const yPos = (scrollTop - offset) * speed;
                
                        img.style.transform = `translateY(${yPos}px)`;
                    });
                });