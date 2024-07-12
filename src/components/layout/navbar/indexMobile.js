import Link from "next/link";

// Styles //
let text_style = 'text-[13px] hover:bg-[#C55300] rounded-lg';
let div_text_style = 'w-1/4 flex flex-col mb-1 items-center';
let div_text_style_2 = 'w-full flex justify-center mb-1';
let span_text_style = 'w-[100px] h-2 rounded-lg bg-[#C55300]';
// Styles //

const IndexesMobile = (props) => {
    // console.log("mobile");
    return (
        <section id="index-mobile" className={'w-4/5 h-full items-end gap-2 text-[#E0E0E0] roboto-bold lg:hidden flex justify-center'}>
            <div className={`${div_text_style}`}>
                <div className={`${div_text_style_2}`}>
                    <span
                        className={`${text_style} bg-[#C55300]`}
                        style={{ padding: '5px 10px' }}>
                        {props.route_name_mobile}
                    </span>
                </div>
                <span className={`${span_text_style}`}></span>
            </div>
        </section>
    )
}

export default IndexesMobile;