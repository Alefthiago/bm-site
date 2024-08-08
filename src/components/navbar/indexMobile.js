// UTIL //
import { Kbd } from "flowbite-react";
// UTIL. //

const IndexesMobile = (props) => {
    // console.log("mobile");
    return (
        <section id="index-mobile" className={'h-full items-end gap-2 roboto-bold md:hidden flex justify-center'}>
            <Kbd
                className={`text-lg bg-[#C55300] border-0 text-[#F8F8F8] font-sans`}
                style={{ padding: '5px 10px' }}>
                {props.route_name_mobile}
            </Kbd>
        </section>
    )
}

export default IndexesMobile;