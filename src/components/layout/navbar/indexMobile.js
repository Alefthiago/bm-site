// UTIL //
import { Kbd } from "flowbite-react";
// UTIL. //

// Styles //
let div_text_style = 'w-1/4 flex flex-col mb-1 items-center';
let div_text_style_2 = 'w-full flex justify-center mb-1';
let span_text_style = 'w-[100px] h-2 rounded-lg bg-[#C55300]';
// Styles //

const IndexesMobile = (props) => {
    // console.log("mobile");
    return (
        <section id="index-mobile" className={'w-4/5 h-full items-end gap-2 roboto-bold lg:hidden flex justify-center'}>
            <div className={`${div_text_style}`}>
                <div className={`${div_text_style_2}`}>
                    <Kbd
                        className={`text-[20px] bg-[#C55300] border-0 text-[#E0E0E0]`}
                        style={{ padding: '5px 10px' }}>
                        {props.route_name_mobile}
                    </Kbd>
                </div>
                <span className={`${span_text_style}`}></span>
            </div>
        </section>
    )
}

export default IndexesMobile;