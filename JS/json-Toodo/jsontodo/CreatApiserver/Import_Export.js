export const navbar = () => {
return `
<nav>
    <ul>

            <img src="https://raw.githubusercontent.com/hetuk2005/Fake_Store/a326263e6337c30036e407bff85c74a9b8748989/Utils/Bakery%20Logo.svg"
             id="logo"   al="Logo">
            <input id="search" name="search" type="search" placeholder="Search" onchange="searchFunc()" />
            <li>Home</li>
            <li onclick="cartFunc()">Cart</li>
            <li onclick="loginFunc()">Login</li>
            <select name="Filter" id="filter" onclick="selectFun()">
                <!-- <option value="Cookies">Cookies</option>
                <option value="Cakes">Cakes</option>
                <option value="Sweets">Sweets</option> -->
            </select>
        </ul>
    </nav>
    <div id="info"></div>`
  }


  