<script>
  import { Swap } from "$atoms";

  let darkMode = false

  const changeTheme = () => {
    let theme = darkMode ? 'dark' : 'cupcake';
    if (document) {
      document?.querySelector('.theme-container')?.setAttribute('data-theme', theme);
    }
  }
  $: darkMode, changeTheme()
</script>

<Swap bind:checked={darkMode} />
