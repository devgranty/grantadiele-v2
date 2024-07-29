<template>
    <main>
        <nav class="nav__animation fixed z-20 top-0 w-full">
            <div class="py-4 px-4 md:px-6 lg:px-8 flex items-center justify-between">
                <div class="flex items-center gap-x-2">
                    <img src="~/assets/img/grant-adiele-img.jpg" loading="eager" class="w-10 rounded-full shadow-xl">
                    <span class="text-diesel-200 text-xs md:text-sm font-medium uppercase leading-4">
                        <p>Grant</p>
                        <p>Adiele</p>
                    </span>
                </div>

                <div class="py-2 px-4 flex items-center gap-x-2 bg-neutral-900 rounded-full">
                    <span class="p-1 w-0 h-0 inline-block bg-green-700 rounded-full animate-ping"></span>
                    <span class="text-diesel-50 text-xs font-medium">Available for work</span>
                </div>
            </div>
        </nav>

        <section class="w-full h-[50vh]">
            <div class="h-full grid place-items-center">
                <div class="relative w-full overflow-hidden">
                    <div class="absolute left-0 top-0 z-10 w-40 h-full bg-gradient-to-r from-diesel-950 to-transparent"></div>
                    <div class="absolute -right-1 top-0 z-10 w-40 h-full bg-gradient-to-l from-diesel-950 to-transparent"></div>
                    <h1 class="hero--header__animation relative w-fit text-diesel-300 text-[10rem] lg:text-[15rem] font-medium uppercase tracking-[-0.1em] flex items-center gap-x-20 will-change-transform marquee-slide">
                        <span aria-hidden="true" class="whitespace-nowrap">Full &ndash; stack &nbsp; developer &nbsp; Enugu &nbsp; NG</span>
                        <span class="whitespace-nowrap">Full &ndash; stack &nbsp; developer &nbsp; Enugu &nbsp; NG</span>
                    </h1>
                </div>
            </div>
        </section>

        <section class="py-4 px-4 md:px-6 lg:px-8 ml-auto max-w-4xl">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <img src="~/assets/img/grant-adiele-img.jpg" loading="eager" class="image--profile__animation">
                </div>
                <div class="space-y-7">
                    <h6 class="subheader--about__animation text-neutral-600 text-xs uppercase">About</h6>
                    <div>
                        <p class="text--about__animation text-neutral-500 tracking-tight">I'm Grant &ndash; a full-stack web developer based in Nigeria, focused on creating functional and intuitive interfaces and back-end systems that are fast, scalable and secure.</p>
                        <a href="https://drive.google.com/file/d/194w9Dji784S-UzH_hKEuiVSWloJ67W74/view" target="_blank" class="text--about__animation group text-neutral-600 text-xs uppercase inline-flex items-center gap-x-2">
                            <span class="lg:group-hover:text-purple-500 transition duration-300 ease-in-out">View curriculum vitae</span>
                            <span class="material-symbols-rounded arrow__animation lg:group-hover:translate-x-3 lg:group-hover:text-purple-500 transition duration-1000 ease-out will-change-transform">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-4 px-4 md:px-6 lg:px-8 mt-20 mx-auto max-w-5xl space-y-7">
            <h6 class="subheader--project__animation text-neutral-600 text-xs text-right md:text-left uppercase">Featured work &middot; <span>{{ projects.length }}</span> projects</h6>
            <div>
                <div v-for="(project, index) in projects" :key="index" class="py-5 space-y-4">
                    <div class="flex items-center justify-end gap-x-2">
                        <span v-for="(tag, j) in project.tags" :key="j" class="project_tag--animation text-neutral-600 text-[8px] font-medium uppercase border border-neutral-700 p-1 rounded">{{ tag }}</span>
                    </div>
                    <h3 class="project_title--animation text-neutral-500 text-4xl lg:text-6xl font-medium tracking-tighter leading-8">
                        <a :href="project.link" target="_blank" v-html="project.title"></a>
                    </h3>
                </div>
            </div>
            <a href="https://github.com/devgranty" target="_blank" class="project_title--animation group text-neutral-600 text-xs uppercase inline-flex items-center gap-x-2">
                <span class="lg:group-hover:text-purple-500 transition duration-300 ease-in-out">See my github</span>
                <span class="material-symbols-rounded arrow__animation lg:group-hover:translate-x-3 lg:group-hover:text-purple-500 transition duration-1000 ease-out will-change-transform">arrow_forward</span>
            </a>
        </section>

        <div class="py-4 px-4 md:px-6 lg:px-8 mt-20 mx-auto max-w-5xl">
            <div class="flex flex-col-reverse md:flex-row items-start gap-20">
                <div class="md:basis-1/2 w-full">
                    <div class="spotify--widget__animation p-8 shadow-lg rounded-3xl border border-green-900" style="background: linear-gradient(to bottom, rgba(22, 163, 74, 0.01), rgba(22, 163, 74, 0.3));">
                        <div class="grid grid-cols-7 gap-3">
                            <div>
                                <img src="~/assets/img/spotify.svg" alt="Spotify" class="w-full">
                            </div>
                            <div class="col-span-4 space-y-4">
                                <h6 class="text-green-400 text-xs uppercase mb-3">{{ songState }}</h6>
                                <div class="space-y-2">
                                    <div class="overflow-hidden">
                                        <a ref="songURL" target="_blank" class="relative w-fit text-white text-lg font-semibold underline underline-offset-2 flex items-center gap-x-5" :class="{'will-change-transform marquee-slide' : songName.length >= 18}">
                                            <span v-if="songName.length >= 18" aria-hidden="true" class="whitespace-nowrap">{{ songName }}</span>
                                            <span class="whitespace-nowrap">{{ songName }}</span>
                                        </a>
                                    </div>
                                    <p class="text-gray-400 text-sm">{{ songArtist }}</p>
                                </div>
                            </div>
                            <div class="col-span-2">
                                <img :src="songCover" :alt="`${songName} cover`" class="w-full rounded-lg shadow-2xl">
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="md:basis-1/2 space-y-20">
                    <section class="space-y-7">
                        <h6 class="subheader--icebreaker__animation text-neutral-600 text-xs uppercase">Icebreakers</h6>
                        <div class="space-y-3">
                            <p class="text--icebreaker__animation text-neutral-500 tracking-tight">I started my journey into tech in 2016. Since then, I have exprienced growth and evolved across design and  development of front-end and back-end systems.</p>
                            <p class="text--icebreaker__animation text-neutral-500 tracking-tight">When not writing code, I'm either playing games, watching movies (especially sci-fi), listening to music, daydreaming or moonwalking.</p>
                        </div>
                    </section>

                    <section class="space-y-7">
                        <div class="grid grid-cols-3">
                            <h6 class="subheader--interest__animation text-neutral-600 text-xs uppercase">Interests</h6>
                            <div class="col-span-2 flex flex-wrap gap-2">
                                <div class="list--interest__animation py-1 px-3 bg-neutral-900 text-sm text-neutral-500 tracking-tight rounded-full">
                                    Front-end development
                                </div>
                                <div class="list--interest__animation py-1 px-3 bg-neutral-900 text-sm text-neutral-500 tracking-tight rounded-full">
                                    Back-end development
                                </div>
                                <div class="list--interest__animation py-1 px-3 bg-neutral-900 text-sm text-neutral-500 tracking-tight rounded-full">
                                    Machine learning
                                </div>
                                <div class="list--interest__animation py-1 px-3 bg-neutral-900 text-sm text-neutral-500 tracking-tight rounded-full">
                                    Database design &amp; management
                                </div>
                                <div class="list--interest__animation py-1 px-3 bg-neutral-900 text-sm text-neutral-500 tracking-tight rounded-full">
                                    API development &amp; integration
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-3">
                            <h6 class="subheader--tool__animation text-neutral-600 text-xs uppercase">Tools</h6>
                            <div class="col-span-2 flex flex-wrap gap-2">
                                <div class="list--tool__animation py-1 px-3 bg-neutral-900 text-sm text-neutral-500 tracking-tight rounded-full">
                                    JavaScript
                                </div>
                                <div class="list--tool__animation py-1 px-3 bg-neutral-900 text-sm text-neutral-500 tracking-tight rounded-full">
                                    Node.js
                                </div>
                                <div class="list--tool__animation py-1 px-3 bg-neutral-900 text-sm text-neutral-500 tracking-tight rounded-full">
                                    MySQL
                                </div>
                                <div class="list--tool__animation py-1 px-3 bg-neutral-900 text-sm text-neutral-500 tracking-tight rounded-full">
                                    Express.js
                                </div>
                                <div class="list--tool__animation py-1 px-3 bg-neutral-900 text-sm text-neutral-500 tracking-tight rounded-full">
                                    Vue.js
                                </div>
                                <div class="list--tool__animation py-1 px-3 bg-neutral-900 text-sm text-neutral-500 tracking-tight rounded-full">
                                    Sequelize
                                </div>
                                <div class="list--tool__animation py-1 px-3 bg-neutral-900 text-sm text-neutral-500 tracking-tight rounded-full">
                                    Nuxt.js
                                </div>
                                <div class="list--tool__animation py-1 px-3 bg-neutral-900 text-sm text-neutral-500 tracking-tight rounded-full">
                                    TailwindCSS
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

        <footer class="px-4 md:px-6 lg:px-8 mt-20 mx-auto max-w-7xl space-y-10">
            <div class="space-y-32">
                <div>
                    <hr class="line__animation w-full border-t-[2px] border-neutral-900 rounded-full">

                    <h1 class="py-5 text-neutral-500 text-3xl lg:text-6xl font-medium tracking-tight leading-7 lg:leading-[50px]">
                        <span class="footer--message__animation inline-block">Let's</span> <span class="footer--message__animation inline-block">talk</span> <span class="footer--message__animation inline-block">about</span> <span class="footer--message__animation inline-block">your</span> <span class="footer--message__animation inline-block">proposal,</span> <span class="footer--message__animation inline-block">project</span> <span class="footer--message__animation inline-block">or</span> <span class="footer--message__animation inline-block">work</span> <span class="footer--message__animation inline-block">together</span> <span class="footer--message__animation inline-block">on</span> <span class="footer--message__animation inline-block">something</span> <span class="footer--message__animation inline-block">&ndash;</span> <span class="footer--message__animation inline-block">get</span> <span class="footer--message__animation inline-block">in</span> <span class="footer--message__animation inline-block">touch.</span>
                    </h1>
                </div>

                <ul>
                    <li>
                        <h3 class="contact__animation">
                            <a href="mailto:hello.devgranty@gmail.com" class="group inline-flex items-center gap-x-2 text-neutral-500 text-4xl lg:text-6xl font-medium tracking-tight">
                                <span>Email</span>
                                <span class="material-symbols-rounded text-4xl lg:text-6xl transition duration-500 ease-out lg:will-change-transform lg:scale-90 lg:opacity-0 lg:-rotate-12 lg:-translate-x-3 group-hover:scale-100  group-hover:opacity-100 group-hover:rotate-0 group-hover:translate-x-0">open_in_new</span>
                            </a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="contact__animation">
                            <a href="https://twitter.com/devgranty" target="_blank" class="group inline-flex items-center gap-x-2 text-neutral-500 text-4xl lg:text-6xl font-medium tracking-tight">
                                <span>X/Twitter</span>
                                <span class="material-symbols-rounded text-4xl lg:text-6xl transition duration-500 ease-out lg:will-change-transform lg:scale-90 lg:opacity-0 lg:-rotate-12 lg:-translate-x-3 group-hover:scale-100  group-hover:opacity-100 group-hover:rotate-0 group-hover:translate-x-0">open_in_new</span>
                            </a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="contact__animation">
                            <a href="https://www.linkedin.com/in/grant-adiele-6533741b3/" target="_blank" class="group inline-flex items-center gap-x-2 text-neutral-500 text-4xl lg:text-6xl font-medium tracking-tight">
                                <span>LinkedIn</span>
                                <span class="material-symbols-rounded text-4xl lg:text-6xl transition duration-500 ease-out lg:will-change-transform lg:scale-90 lg:opacity-0 lg:-rotate-12 lg:-translate-x-3 group-hover:scale-100  group-hover:opacity-100 group-hover:rotate-0 group-hover:translate-x-0">open_in_new</span>
                            </a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="contact__animation">
                            <a href="https://github.com/devgranty" target="_blank" class="group inline-flex items-center gap-x-2 text-neutral-500 text-4xl lg:text-6xl font-medium tracking-tight">
                                <span>Github</span>
                                <span class="material-symbols-rounded text-4xl lg:text-6xl transition duration-500 ease-out lg:will-change-transform lg:scale-90 lg:opacity-0 lg:-rotate-12 lg:-translate-x-3 group-hover:scale-100  group-hover:opacity-100 group-hover:rotate-0 group-hover:translate-x-0">open_in_new</span>
                            </a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="contact__animation">
                            <a href="https://www.instagram.com/devgranty/" target="_blank" class="group inline-flex items-center gap-x-2 text-neutral-500 text-4xl lg:text-6xl font-medium tracking-tight">
                                <span>Instagram</span>
                                <span class="material-symbols-rounded text-4xl lg:text-6xl transition duration-500 ease-out lg:will-change-transform lg:scale-90 lg:opacity-0 lg:-rotate-12 lg:-translate-x-3 group-hover:scale-100  group-hover:opacity-100 group-hover:rotate-0 group-hover:translate-x-0">open_in_new</span>
                            </a>
                        </h3>
                    </li>
                </ul>
            </div>
        </footer>
    </main>
</template>


<script setup>
useSeoMeta({
    title: 'Grant Adiele - Full-stack developer',
    description: "I'm a full-stack developer based in Nigeria focused on creating functional and intuitive interfaces and back-end systems that are fast, scalable and secure.",
    ogTitle: 'Grant Adiele - Full-stack developer',
    ogDescription: "I'm a full-stack developer based in Nigeria focused on creating functional and intuitive interfaces and back-end systems that are fast, scalable and secure.",
    ogImage: 'https://devgranty.netlify.app/img/grant-adiele-img.jpg',
    ogSiteName: 'Grant Adiele',
    ogLocale: 'en_US',
    ogType: 'website',
    ogUrl: 'https://devgranty.netlify.app',
});


const projects = ref([
    {
        title: "Stratogap &ndash; Automated Trading Bot.",
        link: "",
        status: false,
        tags: ["Web design", "Development"]
    },
    {
        title: "Bonitas HMO &ndash; Your Access to Premium Health Care.",
        link: "https://bonitas.netlify.app",
        status: true,
        tags: ["Web design"]
    },
    {
        title: "Rager &ndash; Discover, Book, Experience your Next Event.",
        link: "https://rager.buyiral.com",
        status: true,
        tags: ["Web design", "Development"]
    },
    {
        title: "Eye Disease Prediction System Using Machine Learning.",
        link: "https://eye-disease-prediction.netlify.app",
        status: true,
        tags: ["Web design", "Machine Learning"]
    },
    {
        title: "Buyiral &ndash; An E-commerce Platform for Everyone.",
        link: "https://buyiral.com",
        status: true,
        tags: ["Web design", "Development"]
    }
]);
const songState = ref("Currently listening to");
const songURL = ref(null);
const songName = ref("Loading...");
const songArtist = ref("Loading...");
const songCover = ref("/_nuxt/assets/img/default-cover.svg");

const getAuthToken = async () => {
    const client_id =  "5df897a3a6e044d4b89069aefdab67fe";
    const client_secret = "3e0f13fffeb44b16a4e6681baaa3c2a1";
    const refresh_token = "AQBQUBltqc7Eq5cHCZmWAaAGH1mtPuK9cK8IVLY1CxlrMqUcx-oRhg4xNLwqOLBB76Vy0md3YqTGyxw9BycwP4FQahJtYR9OARUcD6KSekCMbvVQFjO-Lr8WxnjQvA-tNNM";

    const auth_str = client_id + ':' + client_secret;
    const b64_auth_str = btoa(auth_str);

    var urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "refresh_token");
    urlencoded.append("refresh_token", refresh_token);

    const token = await $fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${b64_auth_str}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlencoded
    });

    return token.access_token;
};

const getCurrentTrack = async (token) => {
    const currently_playing = await $fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            // 'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    if(currently_playing){
        songName.value = currently_playing.item.name;
        songURL.value.setAttribute('href', currently_playing.item.external_urls.spotify);
        let artist_array = [];
        currently_playing.item.artists.forEach(artist => {
            artist_array.push(artist.name);
        });
        songArtist.value = artist_array.join(', ');
        songCover.value = currently_playing.item.album.images[0].url;
    }else{
        const last_played = await $fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                // 'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        let played = last_played.items[0].track;
        songState.value = "Last listened";
        songName.value = played.name;
        songURL.value.setAttribute('href', played.external_urls.spotify);
        let artist_array = [];
        played.artists.forEach(artist => {
            artist_array.push(artist.name);
        });
        songArtist.value = artist_array.join(', ');
        songCover.value = played.album.images[0].url;
    }
};

onMounted(() => {
    (async () => {
        const token = await getAuthToken();
        await getCurrentTrack(token);
    })();

    const { $gsap: gsap } = useNuxtApp();
    const tl = gsap.timeline({
        paused: "true",
        delay: 0.5
    });
    tl.play();

    tl.from(".nav__animation", {
        delay: 0.4,
        duration: 1.5,
        opacity: 0,
        y: -25,
        ease: "expo.out"
    });

    // tl.from(".hero--header__animation", {
    //     delay: 0.4,
    //     duration: 1.5,
    //     opacity: 0.4,
    //     x: -25,
    //     ease: "power2.out",
    // });

    gsap.from(".subheader--about__animation", {
        duration: 2,
        opacity: 0,
        x: 25,
        scrollTrigger: ".subheader--about__animation",
        ease: "expo.out"
    });

    tl.fromTo(".image--profile__animation", {
        clipPath: "inset(50% 50% 50% 50%)"
    },
    {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: ".image--profile__animation"
    });

    gsap.from(".text--about__animation", {
        duration: 2,
        opacity: 0,
        y: 30,
        scrollTrigger: ".text--about__animation",
        ease: "expo.out",
        stagger: 0.4
    });

    gsap.from(".subheader--project__animation", {
        duration: 2,
        opacity: 0,
        x: -25,
        scrollTrigger: ".subheader--project__animation",
        ease: "expo.out"
    });

    document.querySelectorAll(".project_title--animation").forEach(item => {
        gsap.from(item, {
            duration: 0.6,
            opacity: 0,
            y: 60,
            scrollTrigger: item,
            ease: "power4"
        });
    });

    document.querySelectorAll(".project_tag--animation").forEach(item => {
        gsap.from(item, {
            duration: 2,
            opacity: 0,
            x: -35,
            scrollTrigger: item,
            ease: "expo.out",
            stagger: 0.4
        });
    });

    document.querySelectorAll(".arrow__animation").forEach(item => {
        gsap.from(item, {
            duration: 3,
            opacity: 0,
            x: -70,
            scrollTrigger: item,
            ease: "expo.out"
        });
    });

    gsap.from(".subheader--icebreaker__animation", {
        duration: 2,
        opacity: 0,
        x: -25,
        scrollTrigger: ".subheader--icebreaker__animation",
        ease: "expo.out"
    });

    gsap.from(".text--icebreaker__animation", {
        duration: 2,
        opacity: 0,
        y: 30,
        scrollTrigger: ".text--icebreaker__animation",
        ease: "expo.out",
        stagger: 0.4
    });

    gsap.from(".subheader--interest__animation", {
        duration: 2,
        opacity: 0,
        x: -25,
        scrollTrigger: ".subheader--interest__animation",
        ease: "expo.out"
    });

    document.querySelectorAll(".list--interest__animation").forEach(item => {
        gsap.from(item, {
            duration: 3,
            opacity: 0,
            y: 25,
            scrollTrigger: item,
            ease: "expo.out",
            stagger: 0.4
        });
    });

    gsap.from(".subheader--tool__animation", {
        duration: 2,
        opacity: 0,
        x: -25,
        scrollTrigger: ".subheader--tool__animation",
        ease: "expo.out"
    });

    document.querySelectorAll(".list--tool__animation").forEach(item => {
        gsap.from(item, {
            duration: 3,
            opacity: 0,
            y: 25,
            scrollTrigger: item,
            ease: "expo.out",
            stagger: 0.4
        });
    });

    gsap.from(".spotify--widget__animation", {
        duration: 2,
        opacity: 0,
        y: 40,
        scrollTrigger: ".spotify--widget__animation",
        ease: "expo.out"
    });

    document.querySelectorAll(".line__animation").forEach(item => {
        gsap.from(item, {
            duration: 4,
            width: "0%",
            scrollTrigger: item,
            ease: "power2.out"
        });
    });

    gsap.from(".footer--message__animation", {
        duration: 0.5,
        opacity: 0,
        y: 30,
        scrollTrigger: ".footer--message__animation",
        ease: "power4",
        stagger: 0.25
    });

    gsap.from(".contact__animation", {
        paused: true,
        duration: 2,
        opacity: 0,
        y: -25,
        x: -25,
        scrollTrigger: ".contact__animation",
        ease: "expo.out",
        stagger: 0.4
    });
});
</script>

<style scoped>
@keyframes marquee {
  100% {
    -webkit-transform: translate3d(calc(-50% - 3rem), 0, 0);
    transform: translate3d(calc(-50% - 3rem), 0, 0);
    -moz-transform: translate3d(calc(-50% - 3rem), 0, 0);
  }
}
.marquee-slide {
    animation: marquee 25s linear infinite;
}

/* .marquee-slide:hover {
    animation-play-state: paused
} */
</style>