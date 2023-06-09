// import CallToActionModule from '~/components/modules/CallToAction';
// import CollectionModule from '~/components/modules/Collection';
// import InstagramModule from '~/components/modules/Instagram';

import ImageModule from 'components/sanity-ui/modules/image';
import type { SanityModule } from 'lib/sanity/types';
import CalloutModule from './callout';
import ProductModule from './product';

type Props = {
  imageAspectClassName?: string;
  module: SanityModule;
};

export default function Module({ imageAspectClassName, module }: Props) {
  switch (module._type) {
    case 'module.callout':
      return <CalloutModule module={module} />;
    // case 'module.callToAction':
    //   return <CallToActionModule module={module} />;
    // case 'module.collection':
    //   return <CollectionModule module={module} />;
    case 'module.image':
      return <ImageModule module={module} />;
    // case 'module.instagram':
    //   return <InstagramModule module={module} />;
    case 'module.product':
      return <ProductModule imageAspectClassName={imageAspectClassName} module={module} />;
    default:
      return null;
  }
}
