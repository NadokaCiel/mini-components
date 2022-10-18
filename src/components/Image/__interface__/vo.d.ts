export interface IDataVO {
  loading: boolean;
  error: boolean;
}

export interface IProps {
  src?: string;
  mode?: string;
  /**
   * 默认不解析 webP 格式，只支持网络资源
   */
  webp?: boolean;
  lazyLoad?: boolean;
  showMenuByLongpress?: boolean;
}
