<script lang="ts">
  import Link from "$lib/components/ui/Link.svelte";
  import DesktopView from "$lib/components/ui/DesktopView.svelte";
  import MobileView from "$lib/components/ui/MobileView.svelte";
</script>

<DesktopView>
  <div class="absolute-center">
    <div>
      <div class="mb-4">
        <p class="text-3xl text-ctp-green mb-1">hey there {">w<"}</p>
        <p class="text-ctp-text">
          so you found this corner of the internet, now what?
        </p>
        <p class="text-ctp-text">
          i dont really have much to put in the homepage
        </p>
        <p class="text-ctp-text">so check out the navbar links</p>
        <p class="text-ctp-text">
          you can also get my <Link href="/socials">socials</Link>
        </p>
      </div>

      <div class="flex items-center mb-2">
        <div class="mr-2 w-56 h-32 bg-ctp-mauve rounded-lg p-1.5">
          <p class="flex justify-center text-black">coding langs i know</p>
          <div class="border border-black w-full my-2" />

          <p class="text-black">c, c++, c#, java, js, ts, py, dart, rust</p>
        </div>

        <div class="w-56 h-32 bg-ctp-mauve rounded-lg p-1.5">
          <p class="flex justify-center text-black">games i play</p>
          <div class="border border-black w-full my-2" />

          <p class="text-black">
            doom eternal, doom 2016, ultrakill, cs2, <a
              href="/just-monika"
              class="text-ctp-green hover:text-ctp-green/70"
            >
              <strong>ddlc,</strong>
            </a> gmod, apex, valorant
          </p>
        </div>
      </div>

      <div class="w-full bg-ctp-mauve rounded-lg p-1.5">
        <p class="flex justify-center text-black">stuff i do</p>
        <div class="border border-black w-full my-2" />

        <p class="text-black mb-1">- ai/ml</p>
        <p class="text-black mb-1">- gaming</p>
        <p class="text-black mb-1">
          - starting projects that i kill off 2 seconds later
        </p>
        <p class="text-black mb-1">- webdev</p>
        <p class="text-black mb-1">- mobile dev</p>
        <p class="text-black mb-1">- lowlevel dev</p>
        <p class="text-black">- android/linux modding (i use arch btw)</p>
      </div>
    </div>
  </div>
</DesktopView>

<MobileView>
  <div class="absolute-center">
    <div>
      <p class="text-2xl text-ctp-green mb-4">hey there {">w<"}</p>

      <div class="mb-2 w-56 bg-ctp-mauve rounded-lg p-1.5">
        <p class="flex justify-center text-black">coding langs i know</p>
        <div class="border border-black w-full my-2" />

        <p class="text-black">c, c++, c#, java, js, ts, py, dart, rust</p>
      </div>

      <div class="mb-2 w-56 bg-ctp-mauve rounded-lg p-1.5">
        <p class="flex justify-center text-black">games i play</p>
        <div class="border border-black w-full my-2" />

        <p class="text-black">
          doom eternal, doom 2016, ultrakill, cs2, <a
            href="/just-monika"
            class="text-ctp-green hover:text-ctp-green/70"
          >
            <strong>ddlc,</strong>
          </a> gmod, apex, valorant
        </p>
      </div>

      <div class="w-full bg-ctp-mauve rounded-lg p-1.5">
        <p class="flex justify-center text-black">stuff i do</p>
        <div class="border border-black w-full my-2" />

        <p class="text-black">
          ai/ml, gaming, killing projects, webdev, mobile dev, lowlevel dev, i
          use arch btw
        </p>
      </div>
    </div>
  </div>
</MobileView>
