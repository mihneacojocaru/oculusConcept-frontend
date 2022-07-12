<div className="relative inline-block text-left">
  <div>
    <button
      type="button"
      className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-fc-dark shadow-sm hover:bg-blueSectionLight focus:outline-none"
      onClick={clickHandler}
    >
      Sprache
      <svg
        className="-mr-1 ml-2 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>

  {optionsActive && (
    <div className="absolute top-8 right-0 mt-2 w-10 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      {router.locales.map((locale) => (
        <Link href={router.asPath} locale={locale} key={locale}>
          <a
            className="uppercase px-2 block rounded-md py-1 text-sm text-fc-dark"
            onClick={clickHandler}
          >
            {locale}
          </a>
        </Link>
      ))}
    </div>
  )}
</div>;
