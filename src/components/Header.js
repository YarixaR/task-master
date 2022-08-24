import NavBar from "./NavBar";

function Header({ setSearchString }) {

    return (
        <div>
            <NavBar setSearchString = { setSearchString }/>
        </div>
    )

}


export default Header