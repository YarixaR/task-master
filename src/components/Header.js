import NavBar from "./NavBar";

function Header({ setSearchString, setUser }) {

    return (
        <div>
            <NavBar setSearchString = { setSearchString }
            setUser={setUser} />
        </div>
    )

}


export default Header