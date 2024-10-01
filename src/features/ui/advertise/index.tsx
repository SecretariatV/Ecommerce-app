import { ADVERTISE_DATA } from "@utils/dataUtils";
import * as S from "./index.styled";
import { Icon } from "@assets/icon";
import { useEffect, useRef, useState } from "react";
import useDeviceSize from "@hooks/useDeviceSize";

export const Advertise = () => {
  const itemRef = useRef<HTMLDivElement>(null);
  const width = useDeviceSize();
  const [size, setSize] = useState<number>(1);

  useEffect(() => {
    if (itemRef.current) {
      const itemWidth = itemRef.current.clientWidth;

      if (itemWidth === width) {
        setSize(3);
      } else if (itemWidth < width) {
        const calculatedSize = Math.floor(width / itemWidth) + 2;
        setSize(calculatedSize > 0 ? calculatedSize : 1);
      }
    }
  }, [width]);

  return (
    <S.Root>
      <S.Wrapper>
        {Array.from({ length: size }).map((_, idx) => (
          <S.Advertise key={idx} ref={itemRef} $length={size} $id={idx}>
            {ADVERTISE_DATA.map((data, index) => (
              <div className="item" key={index}>
                <Icon
                  name={data.icon.iconName}
                  width={data.icon.width}
                  height={data.icon.height}
                />
                <span className="text">{data.text}</span>
              </div>
            ))}
          </S.Advertise>
        ))}
      </S.Wrapper>
    </S.Root>
  );
};
