/**
 * 
 * <Link to = "/01" content="jsx ile işaretlem yapmak"/>
 */

export function Link(props){
    return (
        <a href="{props.to}>{props.children}"></a>
    )
}