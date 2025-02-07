import { lightenHexColor } from "@/lib/utils";
import { useRef, useState } from "react";
import Card from "./components/Card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ClassicTable from "./components/ClassicTable";
import ComparisonTable from "./components/ComparisonTable";

function App({ data }: any) {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [leftArrowBg, setLeftArrowBg] = useState(
    data.settings.carousel_arrow_background_color
  );
  const [rightArrowBg, setRightArrowBg] = useState(
    data.settings.carousel_arrow_background_color
  );
  const firstVisibleTable = data.settings.tables.find(
    (table: any) => table.visible
  );
  console.log(firstVisibleTable);
  const [currentTable, setCurrentTable] = useState(
    data.settings.default_table || firstVisibleTable?.id
  );
  console.log(firstVisibleTable.id);
  const scroll = (direction: string) => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const arrowSize = data.settings.carousel_arrow_size || 40;
  const iconSize = arrowSize * 0.6;
  const {
    show_widget_title,
    widget_title,
    widget_title_alignment,
    widget_title_color,
    widget_title_caption,
    widget_title_caption_color,
    widget_title_caption_font_size,
    multiple_tables_mode,
    primary_color,
    tables,
    layout,
    width,
    default_table,
    highlight_background_color,
    highlight_text_color,
    highlight_style_type,
    column_corner_radius,
    column_style,
    secondary_color,
    font,
  } = data.settings;

  if (font) {
    const formattedFont = font.replace(/\s/g, "+");
    const fontUrl = `https://fonts.googleapis.com/css2?family=${formattedFont}&display=swap`;

    if (!document.head.querySelector(`link[href="${fontUrl}"]`)) {
      const link = document.createElement("link");
      link.href = fontUrl;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
  }

  const {
    font_size: title_font_size,
    font_weight: title_font_weight,
    font_style: title_font_style,
  } = data.settings?.widget_title_text_style || {};

  const filteredTables = multiple_tables_mode
    ? tables.filter((table: any) => table.id === currentTable)
    : tables.filter(
        (table: any) => table.id === default_table && table.visible
      );

  return (
    <div
      style={{
        width: width.auto ? "auto" : width.custom_value,
        margin: "0 auto",
        color: column_style === "style3" ? secondary_color : primary_color,
        fontFamily: font ? `'${font}', sans-serif` : "sans-serif",
      }}>
      {show_widget_title && (
        <div
          style={{ textAlign: widget_title_alignment }}
          className='px-4 my-4 py-2'>
          <p
            style={{
              color: widget_title_color,
              fontSize: title_font_size,
              fontWeight: title_font_weight,
              fontStyle: title_font_style,
            }}>
            {widget_title}
          </p>
          <p
            style={{
              color: widget_title_caption_color,
              fontSize: widget_title_caption_font_size,
            }}>
            {widget_title_caption}
          </p>
        </div>
      )}

      {multiple_tables_mode && (
        <div className='flex items-center justify-center py-7 gap-x-2'>
          {tables.map((table: any) => (
            <div
              key={table.id}
              style={{ color: primary_color }}
              className='space-y-3 text-center'>
              <p
                style={{ backgroundColor: lightenHexColor(primary_color, 95) }}
                className='py-0.5 px-2 mx-3 rounded'>
                {table.caption}
              </p>
              <button
                onClick={() => setCurrentTable(table.id)}
                style={{
                  backgroundColor:
                    currentTable === table.id
                      ? lightenHexColor(primary_color, 60)
                      : lightenHexColor(primary_color, 90),
                }}
                className='rounded-md px-4 mx-4 py-0.5'>
                {table.name}
              </button>
            </div>
          ))}
        </div>
      )}

      {layout === "carousel" ? (
        <div className='relative w-full'>
          <div className='flex items-center w-full'>
            <button
              className='p-2.5 z-50 absolute -left-6 rounded-full flex items-center justify-center'
              onClick={() => scroll("left")}
              onMouseEnter={() =>
                setLeftArrowBg(
                  data.settings.carousel_arrow_background_color_on_hover
                )
              }
              onMouseLeave={() =>
                setLeftArrowBg(data.settings.carousel_arrow_background_color)
              }
              style={{
                background: leftArrowBg,
                transition: "background 0.3s ease",
                width: `${arrowSize}px`,
                height: `${arrowSize}px`,
              }}>
              <ChevronLeft
                style={{
                  color: data.settings.carousel_arrow_color,
                  width: iconSize,
                  height: iconSize,
                }}
              />
            </button>

            <div
              className='flex overflow-auto scroll-smooth px-2.5 py-5 gap-4'
              ref={carouselRef}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              {filteredTables.map((table: any) =>
                table.columns.map((column: any, columnIndex: any) => (
                  <div
                    key={`${table.id}-${columnIndex}`}
                    className='flex min-w-72 relative overflow-hidden'>
                    <Card
                      data={column}
                      showPicture={data.settings.show_picture}
                      pictureAspectRatio={data.settings.picture_aspect_ratio}
                      showTitle={data.settings.show_title}
                      textAlignment={data.settings.title_alignment}
                      titleTextColor={data.settings.title_text_color}
                      titleCaptionColor={data.settings.title_caption_color}
                      titleFont={data.settings.title_font}
                      titleCaptionFont={data.settings.title_caption_font}
                      showFeatures={data.settings.show_features}
                      secondaryColor={data.settings.secondary_color}
                      featuresStyle={data.settings.features_style}
                      featuresAlign={data.settings.features_align}
                      featuresFontSize={data.settings.features_font_size}
                      featuresTextColor={data.settings.features_text_color}
                      featuresIconColor={data.settings.features_icon_color}
                      showPrice={data.settings.show_price}
                      priceAlign={data.settings.price_align}
                      priceColor={data.settings.price_color}
                      priceFont={data.settings.price_font}
                      oldPriceColor={data.settings.old_price_color}
                      oldPriceFont={data.settings.old_price_font}
                      discountTextColor={data.settings.discount_text_color}
                      discountFont={data.settings.discount_font}
                      priceCaptionColor={data.settings.price_caption_color}
                      priceCaptionFont={data.settings.price_caption_font}
                      showButton={data.settings.show_button}
                      button={data.settings.button}
                      buttonAlignment={data.settings.button_alignment}
                      columnStyle={data.settings.column_style}
                      primaryColor={data.settings.primary_color}
                      columnCornerRadius={data.settings.column_corner_radius}
                      layout={data.settings.layout}
                      buttonCaptionColor={data.settings.button.caption_color}
                    />
                  </div>
                ))
              )}
            </div>

            <button
              className='p-2.5 z-50 absolute -right-6 rounded-full flex items-center justify-center'
              onClick={() => scroll("right")}
              onMouseEnter={() =>
                setRightArrowBg(
                  data.settings.carousel_arrow_background_color_on_hover
                )
              }
              onMouseLeave={() =>
                setRightArrowBg(data.settings.carousel_arrow_background_color)
              }
              style={{
                background: rightArrowBg,
                transition: "background 0.3s ease",
                width: `${arrowSize}px`,
                height: `${arrowSize}px`,
              }}>
              <ChevronRight
                style={{
                  color: data.settings.carousel_arrow_color,
                  width: iconSize,
                  height: iconSize,
                }}
              />
            </button>
          </div>
        </div>
      ) : layout === "classic_table" ? (
        <ClassicTable
          key={currentTable}
          columns={
            tables.find((table: any) => table.id === currentTable)?.columns ||
            []
          }
          showPicture={data.settings.show_picture}
          pictureAspectRatio={data.settings.picture_aspect_ratio}
          showTitle={data.settings.show_title}
          textAlignment={data.settings.title_alignment}
          titleTextColor={data.settings.title_text_color}
          titleCaptionFont={data.settings.title_caption_font}
          titleFont={data.settings.title_font}
          titleCaptionColor={data.settings.title_caption_color}
          featuresStyle={data.settings.features_style}
          featuresAlign={data.settings.features_align}
          featuresFontSize={data.settings.features_font_size}
          featuresTextColor={data.settings.features_text_color}
          featuresIconColor={data.settings.features_icon_color}
          primaryColor={data.settings.primary_color}
          columnCornerRadius={data.settings.column_corner_radius}
          columnStyle={data.settings.column_style}
          secondaryColor={data.settings.secondary_color}
          priceCaptionColor={data.settings.price_caption_color}
          button={data.settings.button}
          showButton={data.settings.show_button}
          buttonAlignment={data.settings.button_alignment}
          oldPriceColor={data.settings.old_price_color}
          oldPriceFont={data.settings.old_price_font}
          priceColor={data.settings.price_color}
          priceFont={data.settings.price_font}
          discountFont={data.settings.discount_font}
          discountTextColor={data.settings.discount_text_color}
          priceCaptionFont={data.settings.price_caption_font}
          priceAlign={data.settings.price_align}
          width={data.settings.width}
        />
      ) : layout === "grid" ? (
        <div
          style={{
            display: "grid",
            gap: "15px",
            gridTemplateColumns: `repeat(auto-fit, minmax(240px, 1fr))`,
            margin: "0 auto",
            maxWidth: width.auto ? "auto" : width.custom_value,
          }}>
          {filteredTables.map((table: any) =>
            table.columns.map((column: any, columnIndex: any) => (
              <div className='relative overflow-hidden'>
                {column.highlight_label &&
                  highlight_style_type === "ribbon" && (
                    <div
                      style={{
                        backgroundColor: highlight_background_color,
                        color: highlight_text_color,
                      }}
                      className='min-w-full absolute py-0.5 -right-28 text-sm font-semibold text-center top-6 rotate-45'>
                      {column.highlight_label}
                    </div>
                  )}
                {column.highlight_label && highlight_style_type === "bar" && (
                  <div
                    style={{
                      backgroundColor: highlight_background_color,
                      color: highlight_text_color,
                      borderTopRightRadius: column_corner_radius,
                      borderTopLeftRadius: column_corner_radius,
                    }}
                    className='h-5 absolute top-0 font-semibold text-sm w-full flex items-center justify-center'>
                    {column.highlight_label}
                  </div>
                )}
                <Card
                  key={`${table.id}-${columnIndex}`}
                  data={column}
                  showPicture={data.settings.show_picture}
                  pictureAspectRatio={data.settings.picture_aspect_ratio}
                  showTitle={data.settings.show_title}
                  textAlignment={data.settings.title_alignment}
                  titleTextColor={data.settings.title_text_color}
                  titleCaptionColor={data.settings.title_caption_color}
                  titleFont={data.settings.title_font}
                  titleCaptionFont={data.settings.title_caption_font}
                  showFeatures={data.settings.show_features}
                  secondaryColor={data.settings.secondary_color}
                  featuresStyle={data.settings.features_style}
                  featuresAlign={data.settings.features_align}
                  featuresFontSize={data.settings.features_font_size}
                  featuresTextColor={data.settings.features_text_color}
                  featuresIconColor={data.settings.features_icon_color}
                  showPrice={data.settings.show_price}
                  priceAlign={data.settings.price_align}
                  priceColor={data.settings.price_color}
                  priceFont={data.settings.price_font}
                  oldPriceColor={data.settings.old_price_color}
                  oldPriceFont={data.settings.old_price_font}
                  discountTextColor={data.settings.discount_text_color}
                  discountFont={data.settings.discount_font}
                  priceCaptionColor={data.settings.price_caption_color}
                  priceCaptionFont={data.settings.price_caption_font}
                  showButton={data.settings.show_button}
                  button={data.settings.button}
                  buttonAlignment={data.settings.button_alignment}
                  columnStyle={data.settings.column_style}
                  primaryColor={data.settings.primary_color}
                  columnCornerRadius={data.settings.column_corner_radius}
                  layout={data.settings.layout}
                  buttonCaptionColor={data.settings.button.caption_color}
                />
              </div>
            ))
          )}
        </div>
      ) : (
        <ComparisonTable
          key={currentTable}
          columns={
            tables.find((table: any) => table.id === currentTable)?.columns ||
            []
          }
          headFeatures={
            tables.find((table: any) => table.id === currentTable)
              ?.head_features || []
          }
          headTitle={
            tables.find((table: any) => table.id === currentTable)
              ?.head_title || ""
          }
          showPicture={data.settings.show_picture}
          pictureAspectRatio={data.settings.picture_aspect_ratio}
          showTitle={data.settings.show_title}
          textAlignment={data.settings.title_alignment}
          titleTextColor={data.settings.title_text_color}
          titleCaptionFont={data.settings.title_caption_font}
          titleFont={data.settings.title_font}
          titleCaptionColor={data.settings.title_caption_color}
          featuresIconColor={data.settings.features_icon_color}
          featuresStyle={data.settings.features_style}
          featuresAlign={data.settings.features_align}
          featuresFontSize={data.settings.features_font_size}
          featuresTextColor={data.settings.features_text_color}
          primaryColor={data.settings.primary_color}
          columnCornerRadius={data.settings.column_corner_radius}
          columnStyle={data.settings.column_style}
          secondaryColor={data.settings.secondary_color}
          priceCaptionColor={data.settings.price_caption_color}
          button={data.settings.button}
          showButton={data.settings.show_button}
          buttonAlignment={data.settings.button_alignment}
          oldPriceColor={data.settings.old_price_color}
          oldPriceFont={data.settings.old_price_font}
          priceColor={data.settings.price_color}
          priceFont={data.settings.price_font}
          discountFont={data.settings.discount_font}
          discountTextColor={data.settings.discount_text_color}
          priceCaptionFont={data.settings.price_caption_font}
          priceAlign={data.settings.price_align}
          width={data.settings.width}
          highlight_background_color={highlight_background_color}
          highlight_text_color={highlight_text_color}
          highlight_style_type={highlight_style_type}
        />
      )}
    </div>
  );
}

export default App;
