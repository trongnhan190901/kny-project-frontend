<template>
    <div class="h-screen">
        <div class="w-full h-full bg-gray-900">
            <div class="absolute flex flex-wrap items-center justify-center h-screen w-5/6">          
                <div class="w-[800px] relative -top-24 flex">
                    <AnimePlayer />
                </div>   
                <div id="episodes" class="relative flex px-6">
                    <div class="flex ">
                         <div class="text-white flex -top-80 absolute h-10">
                            <button class="flex w-48 items-center justify-center border rounded-lg">
                                TV Series
                            </button>
                            <button class="flex w-48 items-center justify-center border rounded-lg">
                                Movie
                            </button>
                        </div>                            
                        <ul class="absolute -top-64 h-[400px] overflow-y-scroll w-[380px] ">  
                            <EpisodesList />
                        </ul>
                     </div>
                </div>        
            </div>       
        </div>
    </div>
</template>
<script>
import EpisodesList from '@/components/EpisodesList'
import AnimePlayer from '@/components/AnimePlayer'
export default {
     components: { 
        EpisodesList,
        AnimePlayer
    },
   
}


</script>