export default function NavBar() {
  return (
    <div className="flex items-center justify-between">
      <a
        href="/"
        className="flex items-center gap-3 justify-start hover:brightness-110 duration-200 nav-title"
      >
        <img src="/icon.svg" alt="Logo" width={30} />
        <h1 className="text-2xl font-bold title">DeskWizz</h1>
      </a>
      <ul className="flex gap-1 justify-end">
        <a href="https://github.com/ikeawesom/DeskWizz" target="_blank">
          <li className="flex items-center gap-3 justify-end github-link">
            <div className="py-1 px-4 bg-gradient-to-br from-peach-200 to-peach-600 rounded-md text-default text-sm translate-x-5 opacity-0 contribute">
              <h4>Contribute</h4>
            </div>
            <img src="/socials/icon_github.svg" alt="Github" width={30} />
          </li>
        </a>
      </ul>
    </div>
  );
}
