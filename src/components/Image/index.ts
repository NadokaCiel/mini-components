import "./style";
import { IDataVO, IProps } from "./__interface__/vo";
import {
  method,
  ComponentBase,
  IComponentData,
  IMiniComponentOptions,
  observer,
} from "mini-program-base";

/**
 * 图片加载组件
 */
class VsImage extends ComponentBase<IDataVO> {
  data: IComponentData<VsImage, IDataVO> = {
    loading: true,
    error: false,
  };

  properties: IProps = {
    /**
     * @property src
     * @description 图片资源
     * @type string
     * @requires
     */
    src: "",
    /**
     * @property mode
     * @description mode 的合法值请参考：https://developers.weixin.qq.com/miniprogram/dev/component/image.html
     * @type string
     */
    mode: "scaleToFill",
    /**
     * @property lazyLoad
     * @description 图片懒加载
     * @type boolean
     * @requires
     */
    lazyLoad: false,
    /**
     * @property webp
     * @description 默认不解析 webP 格式，只支持网络资源
     * @type boolean
     * @requires
     */
    webp: false,
    /**
     * @property showMenuByLongpress
     * @description 长按图片显示菜单
     * @type boolean
     * @requires
     */
    showMenuByLongpress: false,
  };

  options: IMiniComponentOptions = {
    styleIsolation: "apply-shared",
  };

  @observer()
  src() {
    this.setData({
      error: false,
      loading: true,
    });
  }

  @method
  handleError(e) {
    this.setData({
      loading: false,
      error: true,
    });

    /**
     * @event onError
     * @description 图片加载完成后触发
     * @detail IOnError {@link ./__interface__/event.d.ts}
     */
    this.triggerEvent("onError", {
      errMsg: e?.detail?.errMsg ?? "",
    });
  }

  @method
  handleLoaded(e) {
    this.setData({
      loading: false,
      error: false,
    });

    /**
     * @event onLoaded
     * @description 图片加载完成后触发
     * @detail IOnLoaded {@link ./__interface__/event.d.ts}
     */
    this.triggerEvent("onLoaded", {
      height: e?.detail?.height,
      width: e?.detail?.width,
    });
  }
}

VsImage.render(new VsImage());
