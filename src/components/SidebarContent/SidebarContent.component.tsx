interface Props {
    children: React.ReactNode
}
const SidebarContent = ({
    children
}:Props) => {
  return (
    <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        {children}
    </div>
  )
}

export default SidebarContent