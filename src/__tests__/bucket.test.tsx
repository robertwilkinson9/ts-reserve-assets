/**
 * @vitest-environment jsdom
 */

import { describe, it } from 'vitest';

import { render, screen } from '@testing-library/react';

import { Bucket } from '../components/bucket';

const test_config = {
  "APIPORT": 1234,
  "COLLECTION": "test",
  "ITEM_NAME": "test_item_name",
  "ITEM_LABEL": "test_item_label",
  "BUCKET_NAME": "test_bucket",
  "BUCKETS":
  [
    {
      "NAME": "first",
      "PREFIX": "f",
      "IFIRST": 1,
      "ILAST": 10
    },
    {
      "NAME": "second",
      "PREFIX": "s",
      "IFIRST": 11,
      "ILAST": 15
    }
  ],
  "FORM_DATA":
  [
    {
      "label": "interesting Test ZERO",
      "helper_text": "We'll never share your Test ZERO data.",
      "email_helper_text": "We'll never share your Test ZERO email."
    },
    {
      "label": "interesting Test ONE",
      "helper_text": "We'll never share your Test ONE data.",
      "email_helper_text": "We'll never share your Test ONE email."
    },
    {
      "label": "interesting Test TWO",
      "helper_text": "We'll never share your Test TWO data.",
      "email_helper_text": "We'll never share your Test TWO email."
    }
  ]

}

/* eslint-disable */
const null_setter = () => {};
/* eslint-enable */

const renderBucket = (items_available: boolean[] = [true, true]) => {
  const bucket = 0;
  return render(<Bucket config={test_config} bucket={bucket} set_bucket={null_setter} items_available={items_available} />);
}

describe('label test', () => {
  it("should contain a bucket label div element", async () => {
    renderBucket();

    const BucketLabelDiv = screen.queryByTestId("bucket_label_div");
    expect(BucketLabelDiv).toBeInTheDocument();
  });

  it("should contain a bucket label label element", async () => {
    renderBucket();

    const BucketLabelLabel = screen.queryByTestId("bucket_label_label");
    expect(BucketLabelLabel).toBeInTheDocument();
  });

  it("bucket label label element should have the correct value", async () => {
    renderBucket();

    const BucketLabelLabel = screen.queryByTestId("bucket_label_label");
    expect(BucketLabelLabel).toHaveTextContent("Test_bucket");
  });
});

describe('buckets test', () => {
  it("should contain a checked button", async () => {
    renderBucket();

    const BucketButtonChecked = screen.queryByTestId("bucket_button_checked");
    expect(BucketButtonChecked).toBeInTheDocument();
  });

  it("should contain a checked button label", async () => {
    renderBucket();

    const BucketButtonChecked = screen.queryByTestId("bucket_button_checked_label");
    expect(BucketButtonChecked).toBeInTheDocument();
  });

  it("default checked button label should be correct value", async () => {
    renderBucket();

    const BucketButtonCheckedLabel = screen.queryByTestId("bucket_button_checked_label");
    expect(BucketButtonCheckedLabel).toHaveTextContent("First");
  });

  it("checked button label should be correct value", async () => {
    const items_available = [false, true];
    renderBucket(items_available);

    const BucketButtonCheckedLabel = screen.queryByTestId("bucket_button_checked_label");
    expect(BucketButtonCheckedLabel).toHaveTextContent("Second");
  });

  it("should contain an unchecked button", async () => {
    renderBucket();

    const BucketButtonUnchecked = screen.queryByTestId("bucket_button_unchecked");
    expect(BucketButtonUnchecked).toBeInTheDocument();
  });

  it("should contain an unchecked button label", async () => {
    renderBucket();

    const BucketButtonUncheckedLabel = screen.queryByTestId("bucket_button_unchecked_label");
    expect(BucketButtonUncheckedLabel).toBeInTheDocument();
  });

  it("default unchecked button label should be correct value", async () => {
    renderBucket();

    const BucketButtonUncheckedLabel = screen.queryByTestId("bucket_button_unchecked_label");
    expect(BucketButtonUncheckedLabel).toHaveTextContent("Second");
  });
});
