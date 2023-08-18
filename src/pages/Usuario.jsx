import { MenuBar } from "../components/MenuBar"

//para isso eu uso o atalho 'rafc'
export const Usuario = () => {

  console.log('window', window.location.pathname)
  return (
    <div>
        <MenuBar/>
    </div>
  )
}
