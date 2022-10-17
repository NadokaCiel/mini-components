export interface IDataVO {
  current: number;
  indicator: number;
}
export interface IBanner {
  src: string;
  isVideo: boolean;
}

export type IBannersVO = IBanner[];

export interface IOnFallbackDetail {
  /**
   * 用户点击的banner位置，从0开始
   */
  index: number;
}

export interface IProps {
  dotBottom: string;
  dotColor: string;
  height: string;
  componentData: IBannersVO;
}
