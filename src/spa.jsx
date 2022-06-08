function hideAllShowOne(idToShow)
{
    document.getElementById("velkommen_html").style = "display:block"

    document.getElementById("allePersoner_html").style = "display:none"
    document.getElementById("findPersoner_html").style = "display:none"
    document.getElementById("sletOpretPersoner_html").style = "display:none"
    document.getElementById(idToShow).style = "display:block"
}

export function menuItemClicked(evt)
{
    const id = evt.target.id;
    switch (id)
    {
        case "allePersoner": hideAllShowOne("allePersoner_html"); break
        case "findPersoner": hideAllShowOne("findPersoner_html"); break
        case "sletOpretPersoner": hideAllShowOne("sletOpretPersoner_html"); break
        default: hideAllShowOne("velkommen_html"); break
    }
    evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("velkommen_html");

export default hideAllShowOne();