/**
 * @vitest-environment jsdom
 */

import { describe, it } from 'vitest';

import { render } from '@testing-library/react';

import { Bucket } from '../components/bucket';

const test_config = {
  "APIPORT": "1234",
  "LCCOLLECTION": "test",
  "ITEM_NAME": "test_item_name",
  "ITEM_LABEL": "test_item_label",
  "BUCKET_NAME": "test_bucket",
  "BUCKETS":
  [
    {
      "name": "first",
      "prefix": "f",
      "ifirst": 1,
      "ilast": 10
    },
    {
      "name": "second",
      "prefix": "s",
      "ifirst": 11,
      "ilast": 20
    }
  ]
}

const null_setter = () => {};

const renderBucket = (bucket: number = 0) => {
  return render(<Bucket config={test_config} bucket={bucket} set_bucket={null_setter} />);
}

describe('label test', () => {
  it("should contain a bucket label div element", async () => {
    const { findByTestId } = renderBucket();

    const BucketLabelDiv = await findByTestId("bucket_label_div");
    expect(BucketLabelDiv).toBeInTheDocument();
  });

  it("should contain a bucket label label element", async () => {
    const { findByTestId } = renderBucket();

    const BucketLabelLabel = await findByTestId("bucket_label_label");
    expect(BucketLabelLabel).toBeInTheDocument();
  });

  it("bucket label label element should have the correct value", async () => {
    const { findByTestId } = renderBucket();

    const BucketLabelLabel = await findByTestId("bucket_label_label");
    expect(BucketLabelLabel).toHaveTextContent("Test_bucket");
  });
});

describe('buckets test', () => {
  it("should contain a checked button", async () => {
    const { findByTestId } = renderBucket(1);

    const BucketButtonChecked = await findByTestId("bucket_button_checked");
    expect(BucketButtonChecked).toBeInTheDocument();
  });

  it("should contain a checked button label", async () => {
    const { findByTestId } = renderBucket(1);

    const BucketButtonChecked = await findByTestId("bucket_button_checked_label");
    expect(BucketButtonChecked).toBeInTheDocument();
  });

  it("default checked button label should be correct value", async () => {
    const { findByTestId } = renderBucket();

    const BucketButtonCheckedLabel = await findByTestId("bucket_button_checked_label");
    expect(BucketButtonCheckedLabel).toHaveTextContent("First");
  });

  it("checked button label should be correct value", async () => {
    const { findByTestId } = renderBucket(1);

    const BucketButtonCheckedLabel = await findByTestId("bucket_button_checked_label");
    expect(BucketButtonCheckedLabel).toHaveTextContent("Second");
  });

  it("should contain an unchecked button", async () => {
    const { findByTestId } = renderBucket(1);

    const BucketButtonUnchecked = await findByTestId("bucket_button_unchecked");
    expect(BucketButtonUnchecked).toBeInTheDocument();
  });

  it("should contain an unchecked button label", async () => {
    const { findByTestId } = renderBucket(1);

    const BucketButtonUncheckedLabel = await findByTestId("bucket_button_unchecked_label");
    expect(BucketButtonUncheckedLabel).toBeInTheDocument();
  });

  it("default unchecked button label should be correct value", async () => {
    const { findByTestId } = renderBucket();

    const BucketButtonUncheckedLabel = await findByTestId("bucket_button_unchecked_label");
    expect(BucketButtonUncheckedLabel).toHaveTextContent("Second");
  });

  it("unchecked button label should be correct value", async () => {
    const { findByTestId } = renderBucket(1);

    const BucketButtonUncheckedLabel = await findByTestId("bucket_button_unchecked_label");
    expect(BucketButtonUncheckedLabel).toHaveTextContent("First");
  });
});
