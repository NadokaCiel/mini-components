import "./style";
import { IDataVO, IProps } from "./__interface__/vo";
import { method, ComponentBase, IComponentData, IMiniComponentOptions, observer } from "mini-program-base";

/**
 * banner组件
 */
class Banner extends ComponentBase<IDataVO> {
  data: IComponentData<Banner, IDataVO> = {
    current: 0,
    indicator: 0,
  };

  properties: IProps = {
    /**
     * @property dotBottom
     * @description 指示器下边距
     * @type string
     */
    dotBottom: "20rpx",
    /**
     * @property dotColor
     * @description 指示器背景颜色，十六进制或rgba
     * @type string
     */
    dotColor: "#fff",
    /**
     * @property height
     * @description banner组件的高度
     * @requires
     * @type string
     */
    height: "",
    /**
     * @property componentData
     * @description banner数据
     * @requires
     * @type IBannersVO {@link ./__interface__/vo.d.ts}
     */
    componentData: [],
  };

  options: IMiniComponentOptions = {
    styleIsolation: "apply-shared",
  };

  @observer()
  componentData() {
    // banner发生变化时，从第一张开始播放
    this.setData({
      current: 0,
      indicator: 0,
    });
  }

  @method
  stopTouchMove() {
    return false;
  }

  @method
  handleBannerTap(e) {
    /**
     * @event onFallback
     * @description 用户点击后触发
     * @detail IOnFallbackDetail {@link ./__interface__/event.d.ts}
     */
    this.triggerEvent("onFallback", {
      index: e.currentTarget.dataset?.index,
    });
  }

  @method
  handleChangeCurrent(e) {
    this.setData({
      indicator: e.detail?.current || 0,
    });
  }
}

Banner.render(new Banner());
