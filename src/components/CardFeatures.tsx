import { lightenHexColor } from "@/lib/utils";
import { ReactSVG } from "react-svg";

const CardFeatures = ({
  features,
  featuresStyle,
  featuresAlign,
  featuresFontSize,
  featuresTextColor,
  featuresIconColor,
  secondaryColor,
  primaryColor,
  columnStyle,
}: any) => {
  const featureBackground = (index: any) => {
    if (["style1", "style2"].includes(columnStyle)) {
      return ["plain", "divided"].includes(featuresStyle)
        ? secondaryColor
        : index % 2 == 0
        ? lightenHexColor(secondaryColor, 15)
        : secondaryColor;
    } else if (columnStyle === "style3") {
      return ["plain", "divided"].includes(featuresStyle)
        ? primaryColor
        : index % 2 == 0
        ? lightenHexColor(primaryColor, 15)
        : primaryColor;
    }
  };

  return (
    <ul className='pt-2'>
      {features.map((item: any, index: any) => (
        <li
          style={{
            fontSize: featuresFontSize,
            color: featuresTextColor,
            justifyContent: featuresAlign,
            borderTopWidth: ["plain", "striped"].includes(featuresStyle)
              ? 0
              : 0.5,
            backgroundColor: featureBackground(index),
          }}
          key={index}
          className='flex items-center border-t py-2.5'>
          <div style={{ color: featuresIconColor }}>
            {item.icon.endsWith(".svg") ? (
              <ReactSVG
                beforeInjection={(svg) => {
                  svg.classList.add("svg-class-name");
                  svg.setAttribute("style", "width: 20px");
                  svg.setAttribute("style", "height: 20px");
                }}
                src={item.icon}
              />
            ) : (
              <img
                className='w-5 h-5 object-cover mx-0.5'
                src={item.icon}
                alt={item.text}
              />
            )}
          </div>
          <p className='px-1.5'>{item.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default CardFeatures;
