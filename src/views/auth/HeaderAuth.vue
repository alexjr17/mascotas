<template>
    <div class="container flex flex-col justify-center items-center h-screen">
       <div class="bg-white box-border h-auto w-96 p-4 rounded-md">
            <div class="self-center relative bg-banner-nav h-40 w-auto rounded-md">
                <div class="absolute bg-gray-400 h-32 w-32 rounded-full -bottom-16 mx-auto left-0 right-0">
                    
                </div>            
            </div>
            <div class="mt-14">
                <slot/>
            </div>
        </div>
    </div>
</template>