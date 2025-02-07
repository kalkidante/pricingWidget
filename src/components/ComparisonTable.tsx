import { lightenHexColor } from "@/lib/utils";
import { ReactSVG } from "react-svg";

const ComparisonTable = (props: any) => {
  const {
    columns,
    headFeatures = [],
    pictureAspectRatio,
    showPicture,
    showTitle,
    textAlignment,
    titleTextColor,
    titleCaptionFont,
    titleFont,
    titleCaptionColor,
    featuresIconColor,
    featuresFontSize,
    featuresTextColor,
    featuresAlign,
    featuresStyle,
    primaryColor,
    columnStyle,
    secondaryColor,
    priceCaptionColor,
    priceCaptionFont,
    button,
    showButton,
    buttonAlignment,
    oldPriceColor,
    oldPriceFont,
    priceColor,
    priceFont,
    discountTextColor,
    discountFont,
    priceAlign,
    width,
    highlight_background_color,
    highlight_text_color,
    highlight_style_type,
    columnCornerRadius,
    headTitle,
  } = props;

  const calculateDiscount = (oldPrice: any, price: any) => {
    if (!oldPrice?.enabled) return 0;
    const oldPriceValue = parseFloat(oldPrice.price);
    const newPriceValue = parseFloat(price.price);
    if (oldPriceValue === 0) return 0;
    return Math.round(((oldPriceValue - newPriceValue) / oldPriceValue) * 100);
  };

  const renderPeriod = (period: any) => {
    switch (period) {
      case "daily":
        return "day";
      case "weekly":
        return "week";
      case "monthly":
        return "month";
      case "quarterly":
        return "quarter";
      case "semi_annually":
        return "6 months";
      case "annually":
        return "year";
      default:
        return period.replace("ly", "");
    }
  };

  const renderPrice = (price: any) => {
    const {
      pricing_model,
      price: priceValue,
      currency,
      period,
      min_price,
      max_price,
      custom_price,
      unit,
    } = price;

    switch (pricing_model) {
      case "fixed":
        return `${currency}${priceValue} / ${renderPeriod(period)}`;
      case "subscription":
        return `${currency}${priceValue} / ${renderPeriod(period)}`;
      case "from":
        return `${currency}${priceValue}`;
      case "range":
        return `${currency}${min_price} - ${currency}${max_price}`;
      case "per":
        return `${currency}${priceValue} / ${unit}`;
      case "free":
        return "Free";
      case "custom":
        return custom_price;
      default:
        return `${currency}${priceValue} / ${renderPeriod(period)}`;
    }
  };

  const renderOldPrice = (oldPrice: any, price: any) => {
    if (!oldPrice?.enabled) return null;

    if (price.pricing_model === "custom") {
      return oldPrice.custom_price;
    }

    if (price.pricing_model === "range") {
      return `${price.currency}${oldPrice.min_price} - ${price.currency}${oldPrice.max_price}`;
    }

    if (price.pricing_model === "per") {
      return `${price.currency}${oldPrice.price} / ${price.unit}`;
    }

    if (price.pricing_model === "from") {
      return `Starting at ${price.currency}${oldPrice.price}`;
    }

    return `${price.currency}${oldPrice.price} / ${renderPeriod(price.period)}`;
  };

  const maxFeatures = Math.max(
    ...columns.map((column: any) => column.features.length)
  );
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
    <div
      style={{
        width: width.auto ? "auto" : width.custom_value,
        backgroundColor: ["style1", "style2"].includes(columnStyle)
          ? "#F9FAFB"
          : columnStyle === "style3"
          ? primaryColor
          : "",
        color: ["style1", "style2"].includes(columnStyle)
          ? primaryColor
          : secondaryColor,
        borderWidth: 0.5,
        borderColor: primaryColor,
        borderRadius: columnCornerRadius,
      }}
      className='px-4 mt-2 mb-5'>
      <table className='w-full border-collapse mx-auto my-4 px-2'>
        <colgroup>
          <col style={{ width: "25%" }} />
          {columns.map((_: any, index: any) => (
            <col key={index} style={{ width: `${80 / columns.length}%` }} />
          ))}
        </colgroup>
        <thead>
          <tr className='relative'>
            <th></th>

            {columns.map((column: any) => (
              <th className='relative overflow-hidden' key={column.id}>
                {column.highlight_label &&
                  highlight_style_type === "ribbon" && (
                    <div
                      style={{
                        backgroundColor: highlight_background_color,
                        color: highlight_text_color,
                      }}
                      className='min-w-full absolute py-0.5 -right-10 text-sm font-semibold text-center top-6 rotate-45'>
                      {column.highlight_label}
                    </div>
                  )}
                {column.highlight_label && highlight_style_type === "bar" && (
                  <div
                    style={{
                      backgroundColor: highlight_background_color,
                      color: highlight_text_color,
                      borderTopRightRadius: columnCornerRadius,
                      borderTopLeftRadius: columnCornerRadius,
                    }}
                    className='h-5 absolute top-0 font-semibold w-full text-sm flex items-center justify-center'>
                    {column.highlight_label}
                  </div>
                )}

                {showPicture && (
                  <div
                    style={{
                      aspectRatio: pictureAspectRatio,
                    }}>
                    <img
                      className='w-full h-full object-cover'
                      src={column.picture}
                      alt=''
                    />
                  </div>
                )}
              </th>
            ))}
          </tr>
          <tr>
            <th>{headTitle}</th>
            {columns.map((column: any) => (
              <th key={column.id} className='py-4'>
                {showTitle && (
                  <div
                    className='py-5'
                    style={{
                      textAlign: textAlignment,
                      backgroundColor:
                        columnStyle === "style2" ? primaryColor : "",
                      color: columnStyle === "style2" ? secondaryColor : "",
                    }}>
                    <p
                      style={{
                        color: titleTextColor,
                        fontSize: titleFont.font_size,
                        fontWeight: titleFont.font_weight,
                        fontStyle: titleFont.font_style,
                      }}>
                      {column.title}
                    </p>
                    <p
                      style={{
                        color: titleCaptionColor,
                        fontSize: titleCaptionFont.font_size,
                        fontWeight: titleCaptionFont.font_weight,
                        fontStyle: titleCaptionFont.font_style,
                      }}>
                      {column.title_caption}
                    </p>
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className=''>
          {Array.from({ length: maxFeatures }).map((_, featureIndex) => (
            <tr
              style={{
                fontSize: featuresFontSize,
                borderColor: lightenHexColor(primaryColor, 40),
              }}
              key={featureIndex}
              className=''>
              <td
                style={{
                  color: featuresTextColor,
                  justifyContent: featuresAlign,
                  backgroundColor: featureBackground(featureIndex),
                }}
                className='px-4 py-2.5'>
                {headFeatures[featureIndex]?.text || " "}{" "}
              </td>
              {columns.map((column: any) => (
                <td key={column.id}>
                  <div
                    className='flex items-center py-2.5'
                    style={{
                      color: featuresTextColor,
                      justifyContent: featuresAlign,
                      backgroundColor: featureBackground(featureIndex),
                    }}>
                    <div style={{ color: featuresIconColor }}>
                      {column.features[featureIndex]?.icon.endsWith(".svg") ? (
                        <ReactSVG
                          beforeInjection={(svg) => {
                            svg.classList.add("svg-class-name");
                            svg.setAttribute("style", "width: 20px");
                            svg.setAttribute("style", "height: 20px");
                          }}
                          src={column.features[featureIndex]?.icon}
                        />
                      ) : (
                        column.features[featureIndex]?.icon && (
                          <img
                            className='w-5 h-5 object-cover mx-0.5'
                            src={column.features[featureIndex]?.icon}
                            alt=''
                          />
                        )
                      )}
                    </div>
                    <span>{column.features[featureIndex]?.text}</span>
                  </div>
                </td>
              ))}
            </tr>
          ))}
          <tr className=''>
            <td></td>
            {columns.map((column: any) => (
              <td key={column.id} className='pt-9 pb-2'>
                <div
                  style={{
                    textAlign: priceAlign,
                    color: oldPriceColor,
                    fontSize: oldPriceFont?.font_size,
                    fontWeight: oldPriceFont?.font_weight,
                    fontStyle: oldPriceFont?.font_style,
                    textDecoration: "line-through",
                  }}>
                  {renderOldPrice(column.old_price, column.price)}
                </div>
              </td>
            ))}
          </tr>
          <tr className=''>
            <td></td>
            {columns.map((column: any) => (
              <td key={column.id} className='pb-2'>
                <div
                  style={{
                    textAlign: priceAlign,
                    color: priceColor,
                    fontSize: priceFont?.font_size,
                    fontWeight: priceFont?.font_weight,
                    fontStyle: priceFont?.font_style,
                  }}>
                  {renderPrice(column.price)}
                </div>
              </td>
            ))}
          </tr>
          <tr className=''>
            <td></td>
            {columns.map((column: any) => (
              <td key={column.id} className='pb-2 '>
                {column.discount?.enabled && (
                  <div
                    style={{
                      textAlign: priceAlign,
                      color: discountTextColor,
                      fontSize: discountFont?.font_size,
                      fontWeight: discountFont?.font_weight,
                      fontStyle: discountFont?.font_style,
                    }}>
                    {column.discount.customLabel ||
                      `ON SALE - SAVE ${calculateDiscount(
                        column.price.old_price,
                        column.price
                      )}%`}
                  </div>
                )}
              </td>
            ))}
          </tr>
          <tr className=' divide-gray-30'>
            <td></td>
            {columns.map((column: any) => (
              <td key={column.id}>
                <div
                  style={{
                    textAlign: priceAlign,
                    color: priceCaptionColor,
                    fontSize: priceCaptionFont?.font_size,
                    fontWeight: priceCaptionFont?.font_weight,
                    fontStyle: priceCaptionFont?.font_style,
                  }}>
                  {column.price_caption}
                </div>
              </td>
            ))}
          </tr>
          <tr className=' divide-gray-30'>
            <td></td>
            {columns.map((column: any) => (
              <td key={column.id} className='pt-8 px-3'>
                {showButton && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: buttonAlignment,
                    }}>
                    <a
                      style={{
                        display: "flex",
                        justifyContent: buttonAlignment,
                      }}
                      href={column.button_link.value}
                      target={column.button_link.target}
                      rel='noopener noreferrer'
                      className='w-full'>
                      <button
                        style={{
                          backgroundColor:
                            button.mode === "filled" ? button.color : "",
                          color:
                            button.mode === "outline"
                              ? button.color
                              : button.label_color,
                          borderWidth: 2,
                          borderColor:
                            button.mode === "outline" ? button.color : "",
                          borderRadius: button.border_radius,
                          paddingLeft: button.horizontal_padding,
                          paddingRight: button.horizontal_padding,
                          paddingTop: button.vertical_padding,
                          paddingBottom: button.vertical_padding,
                          width: button.full_width ? "100%" : button.size,
                          fontSize: button.font.font_size,
                          fontWeight: button.font.font_weight,
                        }}>
                        {column.button_text}
                      </button>
                    </a>
                  </div>
                )}
              </td>
            ))}
          </tr>
          <tr className=' divide-gray-30'>
            <td></td>
            {columns.map((column: any) => (
              <td key={column.id} className='py-2.5'>
                {showButton && (
                  <div
                    style={{
                      textAlign: buttonAlignment,
                      color: priceCaptionColor,
                      fontSize: priceCaptionFont?.font_size,
                      fontWeight: priceCaptionFont?.font_weight,
                      fontStyle: priceCaptionFont?.font_style,
                    }}>
                    {column.button_caption}
                  </div>
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
