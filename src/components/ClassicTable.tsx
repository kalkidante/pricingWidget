import { lightenHexColor } from "@/lib/utils";
import { ReactSVG } from "react-svg";

const ClassicTable = (props: any) => {
  const {
    columns,
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
    columnCornerRadius,
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
      <table className='table-auto w-full border-collapse mx-auto my-3'>
        <thead>
          <tr>
            {columns.map((column: any) => (
              <th key={column.id}>
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

                {showTitle && (
                  <div
                    className='py-4 my-1'
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
        <tbody>
          {Array.from(
            {
              length: Math.max(
                ...columns.map((col: any) => col.features.length)
              ),
            },
            (_, featureIndex) => (
              <tr key={featureIndex}>
                {columns.map((column: any) => (
                  <td key={`${column.id}-${featureIndex}`}>
                    {column.features[featureIndex] && (
                      <div
                        className='flex items-center border-t py-2.5'
                        style={{
                          fontSize: featuresFontSize,
                          color: featuresTextColor,
                          justifyContent: featuresAlign,
                          borderTopWidth: ["plain", "striped"].includes(
                            featuresStyle
                          )
                            ? 0
                            : 0.5,
                          backgroundColor: featureBackground(featureIndex),
                        }}>
                        <div style={{ color: featuresIconColor }}>
                          {column.features[featureIndex].icon.endsWith(
                            ".svg"
                          ) ? (
                            <ReactSVG
                              beforeInjection={(svg) => {
                                svg.classList.add("svg-class-name");
                                svg.setAttribute("style", "width: 20px");
                                svg.setAttribute("style", "height: 20px");
                              }}
                              src={column.features[featureIndex].icon}
                            />
                          ) : (
                            <img
                              className='w-5 h-5 object-cover mx-0.5'
                              src={column.features[featureIndex].icon}
                              alt=''
                            />
                          )}
                        </div>
                        <span>{column.features[featureIndex].text}</span>
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            )
          )}

          {Array.from(
            {
              length: 1,
            },
            (_, featureIndex) => (
              <tr key={featureIndex}>
                {columns.map((column: any) => (
                  <td key={column.id} className='pt-8 mt'>
                    {
                      <div
                        style={{
                          textAlign: priceAlign,
                          display:
                            column.price.pricing_model === "free"
                              ? "none"
                              : "block",
                          color: oldPriceColor,
                          fontSize: oldPriceFont?.font_size,
                          fontWeight: oldPriceFont?.font_weight,
                          fontStyle: oldPriceFont?.font_style,
                          textDecoration: "line-through",
                        }}>
                        {renderOldPrice(column.old_price, column.price)}
                      </div>
                    }
                  </td>
                ))}
              </tr>
            )
          )}
          {Array.from(
            {
              length: 1,
            },
            (_, featureIndex) => (
              <tr key={featureIndex}>
                {columns.map((column: any) => (
                  <td key={column.id} className='py-1'>
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
            )
          )}
          {Array.from(
            {
              length: 1,
            },
            (_, featureIndex) => (
              <tr key={featureIndex}>
                {columns.map((column: any) => (
                  <td key={column.id} className='py-1'>
                    <div>
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
                    </div>
                  </td>
                ))}
              </tr>
            )
          )}
          {Array.from(
            {
              length: 1,
            },
            (_, featureIndex) => (
              <tr key={featureIndex}>
                {columns.map((column: any) => (
                  <td key={column.id} className='py-2'>
                    <div style={{ textAlign: priceAlign }}>
                      {column.discount?.enabled && (
                        <div
                          style={{
                            color: priceCaptionColor,
                            fontSize: priceCaptionFont?.font_size,
                            fontWeight: priceCaptionFont?.font_weight,
                            fontStyle: priceCaptionFont?.font_style,
                          }}>
                          {column.price_caption}
                        </div>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            )
          )}
          {Array.from(
            {
              length: 1,
            },
            (_, featureIndex) => (
              <tr key={featureIndex}>
                {columns.map((column: any) => (
                  <td key={column.id} className='pt-7 pb-2 px-3'>
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
            )
          )}
          {Array.from(
            {
              length: 1,
            },
            (_, featureIndex) => (
              <tr key={featureIndex}>
                {columns.map((column: any) => (
                  <td key={column.id} className='pb-2'>
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
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ClassicTable;
