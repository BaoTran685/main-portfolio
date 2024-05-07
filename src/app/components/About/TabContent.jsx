


const TabContent = ({active, selectTab, children }) => {
  const activeButton = active ? 'text-[white] bg-[var(--orange-color)] shadow-inner' : 'text-[var(--grey-color)] bg-[white]'
  return (
    <button onClick={selectTab} className={`${activeButton} rounded-full px-5 py-2.5 md:px-4 md:py-2 lg:px-6 lg:py-3`}>
      <span
        className={`text--content`}
      >
        {children}
      </span>
    </button>
  )
}

export default TabContent
