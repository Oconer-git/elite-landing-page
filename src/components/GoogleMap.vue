<template>
    <aside className="group relative h-[41rem] w-full md:h-[40rem] lg:h-[44.8rem] xl:h-[25.1rem] xl:w-[47rem]">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.5042346777127!2d120.99126179999999!3d14.5703198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c981a7f00001%3A0x54052bc7c2b96987!2sElite%20Software%20and%20Data%20Security%2C%20Inc.!5e0!3m2!1sen!2sph!4v1739228868024!5m2!1sen!2sph"
            className="absolute left-0 top-0 h-full w-full rounded-lg border-none"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy"
        ></iframe>
        <div className="[transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)] absolute bottom-0 z-20 h-[6.57rem] w-full rounded-b-lg bg-gray-900/60 p-[1rem] text-xl text-white shadow-md transition duration-1000 ease-in-out group-hover:opacity-0 xl:p-[1.5rem]">
            <p className="text-white text-[1.6rem]/[1.8rem]">
                We are conveniently located near Manilai Foundation and Quirino Station
            </p>
        </div>
    </aside>
</template>

<script>
    export default {
        name: 'GoogleMap',
    }
</script>
