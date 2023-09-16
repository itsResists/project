<script>
    import { profileStore } from '../../stores/ModalStore';

</script>



<main>
    
<body >
    {#if $profileStore === false }
<div class='grid grid-cols-5'>
    <div />
    <div>
        <a class='btn p-2' href="/profile" on:click={() => profileStore.set(true)}>Profile</a>
    </div>
    <div>
        <a class='btn p-2' href="/profile/jutsu" on:click={() => profileStore.set(false)}>Jutsu</a>
    </div>
    <div>
        <a class='btn p-2' href="/profile/items" on:click={() => profileStore.set(false)}>Items</a>
    </div>
    <div />
</div>
    
         <!-- content here -->
    {:else}
<div class='grid grid-cols-4'>
    <div />

    <div>
        <a class='btn p-2' href="/profile/jutsu" on:click={() => profileStore.set(false)}>Jutsu</a>
    </div>
    <div>
        <a class='btn p-2' href="/profile/items" on:click={() => profileStore.set(false)}>Items</a>
    </div>
    <div />
</div>
         <!-- else content here -->
    {/if}
    <!-- <div>
        <h1>UserProfile</h1>
        <div class='grid grid-cols-4 justify-center'>
    {#if $profileStore === false }
    <div></div>
            <div>
                <a href="/profile" class="btn m-2" on:click={() => profileStore.set(true)}>Profile</a>
                </div>

    {/if}
            <div>
                <a href="/profile/jutsu" class="btn m-2" on:click={() => profileStore.set(false)}>Jutsu</a>
                </div>
            <div>
                <a href="/profile/items" class="btn m-2" on:click={() => profileStore.set(false)}>Items</a>
                </div>
        </div>
    </div> -->


</body>

    <slot />
</main>