
function Hello(){
    return(
        <>
<div class="area"></div><nav class="main-menu">
    <ul>
        <li>
            <a href="https://jbfarrow.com">
                <i class="fa fa-home fa-2x"></i>
                <span class="nav-text">
                   Home
                </span>
            </a>
          
        </li>
        <li class="has-subnav">
            <a href="#">
                <i class="fa fa-globe fa-2x"></i>
                <span class="nav-text">
                    Account
                </span>
            </a>
            
        </li>
        <li class="has-subnav">
            <a href="#">
               <i class="fa fa-comments fa-2x"></i>
                <span class="nav-text">
                   Dashboard
                </span>
            </a>
            
        </li>
        <li class="has-subnav">
            <a href="#">
               <i class="fa fa-camera-retro fa-2x"></i>
                <span class="nav-text">
                    Sales
                </span>
            </a>
           
        </li>
        <li>
            <a href="#">
                <i class="fa fa-book fa-2x"></i>
                <span class="nav-text">
                Purchases
                </span>
            </a>
        </li>
        <li>
           <a href="#">
               <i class="fa fa-cogs fa-2x"></i>
                <span class="nav-text">
                Inventory
                </span>
            </a>
        </li>
        <li>
           <a href="#">
                <i class="fa fa-map-marker fa-2x"></i>
                <span class="nav-text">
                Payroll Management
                </span>
            </a>
        </li>
        <li>
            <a href="#">
               <i class="fa fa-info fa-2x"></i>
                <span class="nav-text">
                Tax Preparation
                </span>
            </a>
        </li>
    </ul>

    <ul class="logout">
        <li>
           <a href="#">
                 <i class="fa fa-power-off fa-2x"></i>
                <span class="nav-text">
                    Logout
                </span>
            </a>
        </li>  
    </ul>
</nav>
</>
    )
}
export default Hello;